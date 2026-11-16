# Golden Solution - R595

## Reference answer

≈ 1.44 V ≤ $V_{in,CM}$ ≤ ≈ 3.21 V, i.e., from 1.44 V up to essentially the supply (3 V). Without body effect: 1.36 V to 2.68 V.

- $V_{GS5} = 0.7 + 0.386 = 1.086$ V.
- Followers: $V_{ov6} = \sqrt{2(50\ \mu\mathrm{A})/(134\ \mu\mathrm{A/V^2} \times 20)} = 0.193$ V. With $V_{TH6}$ = 0.907 V (source at 1.086 V), $V_{GS6} = 1.100$ V and $V_{out,CM} = V_{GS5} + V_{GS6} \approx 2.19$ V (1.98 V without body effect). The PMOS loads are still saturated (≤ 2.49 V).
- Lower bound ($M_5$ at the edge of saturation): $V_{ov5} + V_{TH1}(0.386\ \mathrm{V}) + V_{ov1} = 1.44$ V.
- Upper bound: $V_P = 2.19 - 0.273 = 1.91$ V, so $V_{TH1} = 1.03$ V and $V_{in,CM} \le 2.19 + 1.03 = 3.21$ V, above $V_{DD}$.

## Grading notes

+2: output CM ≈ 2.19 V, lower bound ≈ 1.44 V, upper bound ≈ 3.2 V, i.e., limited by $V_{DD}$; ±3%. +1: the same method without body effect (1.36 V to 2.68 V), or $I_{D6,7}$ read as the total follower current. 0: only one bound right. -2 (asserted as fact): output CM taken as $V_{GS5}$ alone or assumed to be 1.5 V, a lower bound claimed to depend on the follower $V_{GS}$ (it is set by $M_5$ and $M_1$ alone), or the follower current assigned to $M_1$/$M_2$.
