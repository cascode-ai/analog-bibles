# Golden Solution - G430

## Reference answer

$a_{dm0} \approx -2.1 \times 10^3$ (about −2130; √2 times the ≈ −1500 of the original $m_1 = 10$ design).

- $a_{dm0} = -g_{m1}R_{odh}$, $R_{odh} \approx [r_{o1A}g_{m1A}(r_{o11}\|r_{o1})]\,\|\,(r_{o3A}g_{m3A}r_{o3})$.
- $r_{o1} = 1/(2.0\ \text{mA} \times 0.15) = 3.33$ kΩ, $r_{o1A} = 1/(2.4\ \text{mA} \times 0.17) = 2.45$ kΩ, $r_{o3} = r_{o3A} = 2.78$ kΩ, $r_{o11} = 1.34$ kΩ; $g_{m1A} = \sqrt{2(45\mu)(24)(133.3)(2.4\text{m})} = 26$ mA/V, $g_{m3A} = 36$ mA/V.
- $R_{odh} = [2450(0.026)(1340\|3330)]\,\|\,[2780(0.036)(2780)] = 60.9\ \text{k}\,\|\,278\ \text{k} \approx 50$ kΩ, unchanged because $r_{o1}$ depends only on the current.
- New $g_{m1} = \sqrt{2(170\ \mu)(20 \times 133.3)(2.0\ \text{mA})} = 42.6$ mA/V (was 30.1 mA/V).
- $a_{dm0} = -0.0426 \times 50.0\ \text{k} \approx -2130$.
- An exact nodal analysis of the half circuit gives −2165 (−1530 for $m_1 = 10$); $g_{m1}$ times the full cascode output resistance $[(1+g_{m1A}r_{o1A})(r_{o1}\|r_{o11})+r_{o1A}]\,\|\,[(1+g_{m3A}r_{o3A})r_{o3}+r_{o3A}] = 52.8$ kΩ gives −2250. All of these are acceptable.

## Grading notes

+2: −2050 to −2300 (or the magnitude), with $g_{m1}$ scaled by √2 (30.1 → 42.6 mA/V) and $R_{odh}$ unchanged. This covers the $g_mr_o$ approximation (≈ −2130 to −2150), the exact nodal result (≈ −2165), $g_{m1}$ times the full output resistance (≈ −2250), and scaling a correctly computed original gain (≈ −1500 to −1590) by √2. +1: right reasoning with a small slip that leaves the result within about 10% of −2165. 0: correct structure but $R_{odh}$ miscomputed (e.g. without the cascode boost) carried consistently. −2 (asserted as fact): gain doubled (≈ −3000) by scaling $g_m$ ∝ W/L at fixed current, gain unchanged, or $r_{o1}$ assumed to change with W.
