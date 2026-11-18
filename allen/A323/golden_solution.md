# Golden Solution - A323

## Reference answer

GB(max) ≈ $1.43\times10^8$ rad/s (≈ 22.8 MHz); $C_L(\min) \approx 3.45$ pF.

- 60° margin: $2\tan^{-1}\frac{GB}{0.702\,\mathrm{G}} + \tan^{-1}\frac{GB}{1.652\,\mathrm{G}} + \tan^{-1}\frac{GB}{4.176\,\mathrm{G}} + \tan^{-1}\frac{GB}{555\,\mathrm{G}} = 30°$ → GB = 143 Mrad/s.
- $|p_d| = GB/A_{vd}(0) = 143\times10^6/3678 = 38.9\times10^3$ rad/s → $C_L = 1/(|p_d|R_{out}) = 1/(38.9\times10^3\times7.44\times10^6) = 3.45$ pF. A smaller $C_L$ raises GB and lowers the phase margin below 60°.
- (Original: $C_L$ = 10 pF gives GB = 3678/(7.44 MΩ·10 pF) = 49 Mrad/s, 7.9 MHz, so the GB rises by about ×2.9.)
- If the phase is evaluated at the exact unity-gain crossover, GB ≈ 150 Mrad/s and $C_L$ ≈ 3.3 pF.

## Grading notes

+2: GB ≈ 135–155 Mrad/s (21–25 MHz) from the phase of all nondominant poles ($p_A$ and $p_B$ both counted) and $C_L$ ≈ 3.2–3.7 pF from $C_L = A_{vd}(0)/(R_{out}GB)$. +1: right GB with a slip in $C_L$, or the phase sum written without $p_9$ (GB ≈ 154 Mrad/s, $C_L$ ≈ 3.2 pF). Judge this omission from the phase sum the answer writes, not from the GB value, since the exact-crossover solution ($C_L$ ≈ 3.3 pF, nominal GB ≈ 150 Mrad/s) is fully correct and earns +2. 0: a phase sum missing $p_6$ (GB ≈ 173 Mrad/s) or $p_B$, or GB set by a rule of thumb (e.g., $|p_A|/4$ = 176 Mrad/s, ≈ 56°), with $C_L$ consistent with it; or GB in Hz used where rad/s is needed. −2 (asserted as fact): GB from a single nondominant pole, e.g., $|p_A|\tan30°$ ≈ 405 Mrad/s (65 MHz) with $C_L$ ≈ 1.2–1.5 pF (the true margin would be ≈ 10°), or GB = $|p_A|/2.2$.
