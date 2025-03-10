"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Play, Pause } from "lucide-react"

interface AudioPlayerProps {
  audioUrl: string
  isCompact?: boolean
}

const AudioPlayer = ({ audioUrl, isCompact = false }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const progressBarRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const setAudioData = () => {
      setDuration(audio.duration)
    }

    const setAudioProgress = () => {
      if (audio.currentTime > 0) {
        setProgress((audio.currentTime / audio.duration) * 100)
      }
    }

    // Set up event listeners
    audio.addEventListener("loadeddata", setAudioData)
    audio.addEventListener("timeupdate", setAudioProgress)

    // Clean up event listeners
    return () => {
      audio.removeEventListener("loadeddata", setAudioData)
      audio.removeEventListener("timeupdate", setAudioProgress)
    }
  }, [])

  const togglePlayPause = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current
    const progressBar = progressBarRef.current
    if (!audio || !progressBar) return

    const rect = progressBar.getBoundingClientRect()
    const percent = (e.clientX - rect.left) / rect.width
    audio.currentTime = percent * audio.duration
    setProgress(percent * 100)
  }

  // Format time in MM:SS
  const formatTime = (time: number) => {
    if (isNaN(time)) return "00:00"
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }

  return (
    <div className={`flex ${isCompact ? "items-center" : "flex-col"} w-full`}>
      <audio ref={audioRef} src={audioUrl} preload="metadata" />

      <div className={`flex items-center ${isCompact ? "w-full" : "mb-2"}`}>
        <button
          onClick={togglePlayPause}
          className="audio-controls mr-2 flex-shrink-0"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        </button>

        {isCompact ? (
          <div ref={progressBarRef} className="audio-player flex-grow mx-2" onClick={handleProgressClick}>
            <div className="audio-player-progress" style={{ width: `${progress}%` }}></div>
          </div>
        ) : (
          <>
            <div className="waveform flex-grow mx-2">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className={`waveform-bar ${isPlaying ? "playing" : ""}`}
                  style={{
                    height: `${Math.random() * 70 + 30}%`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                ></div>
              ))}
            </div>
            <span className="text-xs text-muted-foreground ml-2">{formatTime(duration)}</span>
          </>
        )}
      </div>

      {!isCompact && (
        <div ref={progressBarRef} className="audio-player w-full" onClick={handleProgressClick}>
          <div className="audio-player-progress" style={{ width: `${progress}%` }}></div>
        </div>
      )}
    </div>
  )
}

export default AudioPlayer

