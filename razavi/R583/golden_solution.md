# Golden Solution - R583

## Reference answer

A track-and-hold waveform. $V_{in}$ spans 0 to 1 V, and the 20-ns clock period gives 5 samples per 100-ns input period.

- During each 10-ns high phase, $V_{out}$ follows $V_{in}$.
- During each 10-ns low phase, $V_{out}$ holds the value $V_{in}$ had when $S_1$ opened.
- Example (clock high during 0–10 ns, 20–30 ns, …, so $S_1$ opens at 10, 30, 50, 70, 90 ns): held levels of 0.794, 0.976, 0.500, 0.024 and 0.206 V, repeating every 100 ns.
- The output looks like the input sinusoid with a flat segment every other 10 ns. It does not reset to zero between samples (no return-to-zero), and the buffer gives unity gain with no inversion. (The small pedestals from the charge injection and clock feedthrough of $S_1$ are ignored.)

## Grading notes

+2: tracks $V_{in}$ during the on-phase and holds during the off-phase (10 ns each), 5 samples per input cycle, output between 0 and 1 V, no return to zero. +1: the right behavior with the sample rate or hold duration wrong or unspecified. 0: only "a sample-and-hold output" stated, without describing the waveform. -2 (asserted as fact): an output that returns to zero each cycle, an inverted output, or a gain other than 1.
