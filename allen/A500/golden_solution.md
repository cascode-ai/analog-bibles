# Golden Solution - A500

## Reference answer

N = 8 bits.

- Settling time available: $T = 1/f_s = 1\ \mu$s, so $t\cdot BW = 2\pi \times 10^6 \times 10^{-6} = 2\pi$.
- Remaining error of a full-scale step: $e^{-2\pi} = 1.87\times10^{-3}$ of $V_{REF}$.
- Requirement: $e^{-2\pi} \le 2^{-(N+1)}$ → $2^{N+1} \le 535.5$ → $N + 1 \le 9.06$ → $N = 8$ (½ LSB at 8 bits = $1.95\times10^{-3}V_{REF}$ ≥ $1.87\times10^{-3}V_{REF}$; at 9 bits ½ LSB = $0.98\times10^{-3}V_{REF}$ is too small).

## Grading notes

+2: N = 8 from $e^{-2\pi} \le 2^{-(N+1)}$ (error ≈ 1.87×10⁻³ of full scale). +1: correct setup with a rounding slip that still lands on 8, or 8 bits stated with only a sketchy justification. 0: correct method with an arithmetic slip giving 7 or 9 bits. −2 (asserted as fact): a result from a wrong error criterion or wrong time (e.g., 9 bits from a 1-LSB criterion, 3 bits from half a period, or BW taken as $10^6$ rad/s giving 0 bits), contradicting the stated assumptions.
