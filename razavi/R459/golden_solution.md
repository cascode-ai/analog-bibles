# Golden Solution - R459

## Reference answer

About 6 (down from 20).

- In triode, $M_6$'s output resistance is $R_{on6} = 1/[\mu_pC_{ox}(W/L)_6(|V_{OD6}| - |V_{DS6}|)] = 1/(38.4\ \mu \times 469 \times 0.05) = 1.11$ kΩ.
- Its current hardly changes (≈ 0.98 mA), so $g_{m5} \approx 2(1\ \mathrm{mA})/0.333\ \mathrm{V} = 6$ mS.
- $A_2 = g_{m5}(r_{O5}\|R_{on6}) = 6\ \mathrm{mS} \times (10\ \mathrm{k}\|1.11\ \mathrm{k}) = 6\ \mathrm{mS} \times 1.0\ \mathrm{k\Omega} = 6.0$.

## Grading notes

+2: gain ≈ 6 (5.6–6.4) from $R_{on6} \approx 1.1$ kΩ in parallel with $r_{O5} = 10$ kΩ. +1: correct $R_{on6}$ with the gain approximated as $g_{m5}R_{on6} \approx 6.7$, or a small slip. 0: correct idea that $M_6$'s output resistance collapses but a wrong formula slip changes the value substantially. -2 (asserted as fact): gain unchanged at 20, $R_{on6}$ computed with the full overdrive (≈ 0.17 kΩ) or with $1/(\lambda I_D)$, or the gain claimed to increase.
