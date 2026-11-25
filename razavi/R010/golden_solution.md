# Golden Solution - R010

## Reference answer


The fixed terminals are $V_S=1$ V, $V_D=1.5$ V and $V_G=1.9$ V; the bulk is swept as $V_B=V_X$. Thus $V_{GS}=0.9$ V, $V_{DS}=0.5$ V and $V_{SB}=1-V_X$ V. The figure''s $I_X$ arrow points from the drain contact toward $M_1$, so the saturated channel current follows $I_X$ when junction current is negligible.

Use $\beta=\mu_nC_{ox}W/L$, neglect channel-length modulation, and distinguish $g_m$ from the bulk-sweep transconductance $g_{mb}$. The body-effect model gives

$$V_{TH}=0.7+0.45\left(\sqrt{1.9-V_X}-\sqrt{0.9}\right),$$
$$I_X=\frac12\beta(0.9-V_{TH})^2,\qquad g_m=\beta(0.9-V_{TH}).$$

For $0\le V_X\le1$ V, neither body junction is forward biased. $V_{TH}$ falls from $0.893375$ to $0.700$ V, so $0<V_{GS}-V_{TH}\le0.200$ V $<V_{DS}$ and the channel remains saturated. The modeled curves increase:

| $V_X$ (V) | $I_X/\beta$ (V²) | $g_m/\beta$ (V) |
|---|---:|---:|
| 0 | $2.195\times10^{-5}$ | 0.006625 |
| 0.5 | 0.004461 | 0.09446 |
| 1 | 0.02000 | 0.2000 |
| 1.5 (conditional) | 0.05859 | 0.3423 |

The source–bulk junction has forward-bias polarity for $V_X>1$ V and the drain–bulk junction for $V_X>1.5$ V. The dashed 1–1.5 V extension is valid only if junction current remains negligible. Above that, the supplied data do not determine a total-current or transconductance curve; junction injection and parasitic bipolar transport need additional parameters. Do not extrapolate the square-root model to 3 V.

Near the 6.6-mV starting overdrive, square-law values are formal estimates. In the channel model,

$$g_{mb}=\left.\frac{\partial I_X}{\partial V_X}\right|_{V_G,V_D,V_S}=g_m\frac{\gamma}{2\sqrt{2|\phi_F|+V_S-V_X}}.$$

The two requested quantities use separate axes. The SVG labels are normalized as $I_X/\beta$ (V²) and $g_m/\beta$ (V); its numeric display scale corresponds to $\beta=1\ \mathrm{mA/V^2}$.

![R010: normalized current and gate transconductance](/q/R010/solution-curves.svg)

## Grading notes

- +2: correct fixed biases, threshold, saturated curves in the supported range, and forward-junction/model limits; a clearly conditional extension toward 1.5 V is accepted.
- +1: low-bias analysis correct but model limits unclear or one arithmetic slip.
- 0: extrapolates the square-law model to 3 V without junction injection.
- −2: sweeps gate or drain, gives decreasing current over 0–1 V, or invents a unique high-bias curve.

Allow ±5% for nonzero modeled values. Do not require an unsupported current sign, plateau or universal diode threshold. Gate transconductance is expected; correctly identified $g_{mb}$ is also accepted.

