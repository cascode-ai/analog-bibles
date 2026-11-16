# Golden Solution - G309

## Reference answer

$C ≈ 7.8$ pF; slew rate ≈ 77 V/μs, i.e. about 38.5 times the original 2 V/μs.

- Original: $g_{m1} = 10\text{ μA}/26\text{ mV} = 0.385$ mA/V; $\omega_u = g_{m1}/C = 0.385\text{ mA/V}/10\text{ pF} = 3.85 \times 10^7$ rad/s (6.1 MHz); SR $= I_{EE}/C = 20\text{ μA}/10\text{ pF} = 2$ V/μs.
- PMOS input: same $\omega_u$ requires $C = g_m/\omega_u = 300\text{ μA/V}/3.85 \times 10^7 = 7.8$ pF.
- New SR $= 600\text{ μA}/7.8\text{ pF} = 77$ V/μs. Improvement factor $= (I_{xm}/g_{mI})_{\text{new}}/(I_{xm}/g_{mI})_{\text{old}} = (600/300\text{ V})/(20\text{ μA}/0.385\text{ mA/V}) = 2\text{ V}/0.052\text{ V} = 38.5$.

## Grading notes

+2: $C$ ≈ 7.8 pF (±5%), new SR ≈ 77 V/μs and improvement ≈ 38–39 times (±5%). +1: correct $C$ and SR with the improvement factor missing or computed against a wrong baseline, or one arithmetic slip. 0: correct method with slips in two quantities, or only $C$ correct. −2 (asserted as fact): $C$ kept at 10 pF (ignoring the unity-gain-frequency constraint), slew rate claimed independent of the input device, or the tail current taken as 300 μA (half) giving SR off by 2 without justification.
