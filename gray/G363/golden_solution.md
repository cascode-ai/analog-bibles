# Golden Solution - G363

## Reference answer

At 500 Hz: $R_{S(\text{opt})} \approx 16.6$ kΩ and $F_{\text{opt}} \approx 1.19$, i.e. ≈ 0.76 dB (a correlated analysis gives ≈ 16.6 kΩ and 0.82 dB).

- Base-current noise at 500 Hz: $2qI_B(1 + 1000/500) = 3\times2qI_B$ with $I_B = 0.1\ \mu$A.
- $\overline{v_i^2} = 4kT(r_b + 1/2g_m) = 4kT(300 + 1300)\ \Omega$.
- $R_{S(\text{opt})} = 28.8\text{ k}/\sqrt3 = 16.6$ kΩ; $F_{\text{opt}} = 1 + \sqrt3\times0.111 = 1.192$ → 0.76 dB (vs 0.46 dB without flicker noise).

## Grading notes

+2: $R_{S,opt}$ 16–17.5 kΩ and $F_{opt}$ 0.74–0.84 dB, with the factor 3 on the base-current noise. +1: right method with a minor slip or no dB value. 0: wrong flicker factor (e.g., 2) with otherwise correct method. −2 (asserted as fact): flicker treated as independent of base current/frequency in a way that leaves the 0.46-dB result unchanged, or $R_{S,opt}$ said to increase.
