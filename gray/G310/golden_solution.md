# Golden Solution - G310

## Reference answer

Full-power bandwidth ≈ 21 kHz.

- Slew rate: the input stage delivers at most $I_{EE} = 20$ μA into the 10-pF Miller capacitor: SR = 20 μA/10 pF = 2 V/μs.
- For $V_o = \hat{V}\sin\omega t$ the maximum slope is $\omega\hat{V}$; slew limiting begins when $\omega\hat{V}$ = SR: $f = \dfrac{\text{SR}}{2\pi\hat{V}} = \dfrac{2 \times 10^6}{2\pi \times 15} = 21.2$ kHz.

## Grading notes

+2: SR = 2 V/μs and $f$ ≈ 21 kHz (±5%). +1: correct method with an amplitude slightly below 15 V (e.g. 14 V → 22.7 kHz) or a small slip. 0: correct SR but the frequency computed with a wrong amplitude (e.g. 10 V → 31.8 kHz) or without the 2π. −2 (asserted as fact): a full-power bandwidth taken as the small-signal unity-gain frequency (≈ 6 MHz), or a slew rate from the 300-μA source (30 V/μs).
