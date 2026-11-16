# Golden Solution - A538

## Reference answer

$|\Delta V_{REF}| \le V_{REF}/12$ (≈ 0.083 $V_{REF}$).

- In subrange $m$ the DAC output is too large by $m\Delta V_{REF}/4$, so the stage-2 transitions of that subrange move by $m\Delta V_{REF}/4$. The stage-1 transitions stay put.
- Worst case $m = 3$: shift $= 3\Delta V_{REF}/4 = 12\,\Delta V_{REF}/V_{REF}$ LSB.
- $12|\Delta V_{REF}|/V_{REF} \le 1$ → $|\Delta V_{REF}| \le V_{REF}/12$.
- At this limit the top subrange starts to lose a code (code 1111 for $+\Delta V_{REF}$, 1100 for $-\Delta V_{REF}$).

## Grading notes

+2: $V_{REF}/12$ (±3 %) from the worst-case shift $3\Delta V_{REF}/4$ ≤ 1 LSB = $V_{REF}/16$. +1: correct value with a sketchy argument or a minor slip. 0: correct mechanism but the wrong subrange used (e.g., giving $V_{REF}/4$) with reasoning shown. −2 (asserted as fact): $V_{REF}/16$ (full DAC error compared with 1 LSB), a pure-gain-error treatment, or another wrong value.
