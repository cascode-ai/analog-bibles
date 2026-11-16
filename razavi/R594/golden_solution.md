# Golden Solution - R594

## Reference answer

≈ 1.44 V ≤ $V_{in,CM}$ ≤ ≈ 3.09 V, i.e., from 1.44 V up to essentially the supply (3 V). Without body effect: 1.36 V to 2.57 V.

- Output CM: in the CM-definition phase $V_X = V_{GS5}$ and $V_{out,CM} = V_{GS5} + V_{GS6,7}$. $V_{ov5} = \sqrt{2(1\ \mathrm{mA})/(134\ \mu\mathrm{A/V^2} \times 100)} = 0.386$ V, so $V_{GS5} = 1.086$ V.
- $M_6$/$M_7$: $V_{ov} = \sqrt{2(50\ \mu\mathrm{A})/(13.4\ \mathrm{mA/V^2})} = 0.086$ V. Their source is at 1.086 V, so $V_{TH6} = 0.7 + 0.45(\sqrt{1.986} - \sqrt{0.9}) = 0.907$ V and $V_{GS6} = 0.994$ V. Hence $V_{out,CM} \approx 2.08$ V (1.87 V without body effect). The loads $M_3$/$M_4$ ($|V_{ov}|$ = 0.51 V) stay saturated up to 2.49 V ✓.
- Lower bound ($M_5$ saturated, $V_P \ge V_{ov5}$ = 0.386 V): $V_{in,CM} \ge 0.386 + V_{TH1}(V_{SB} = 0.386) + V_{ov1} = 0.386 + 0.783 + 0.273 = 1.44$ V, with $V_{ov1} = 0.273$ V at 0.5 mA.
- Upper bound ($M_1$/$M_2$ saturated, $V_{in,CM} \le V_{out,CM} + V_{TH1}$): at the edge $V_P = V_{out,CM} - V_{ov1} = 1.81$ V, so $V_{TH1} = 1.013$ V and $V_{in,CM} \le 3.09$ V. This exceeds $V_{DD}$, so within the supply the input CM can go up to ≈ $V_{DD}$.

## Grading notes

+2: output CM ≈ 2.08 V from $V_{GS5} + V_{GS6}$ (with body effect on $M_6$/$M_7$), lower bound ≈ 1.44 V ($M_5$ at the edge of saturation, body effect on $M_1$), and upper bound ≈ 3.1 V, i.e., limited by $V_{DD}$; ±3%. +1: the same method without body effect (1.36 V to 2.57 V), or with $I_{D6,7}$ read as the total follower current (bounds within a few tens of mV). 0: only one bound right. -2 (asserted as fact): output CM taken as $V_{GS5}$ alone or assumed to be 1.5 V, the $M_5$ headroom requirement omitted, or the 50-µA current assigned to $M_1$/$M_2$.
