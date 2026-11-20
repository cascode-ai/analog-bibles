# Golden Solution - R010

## Reference answer

The fixed terminals give $V_{GS}=0.9$ V and $V_{DS}=0.5$ V. The bulk is swept, so $V_{SB}=V_S-V_X$. Use $\beta=\mu_nC_{ox}W/L$; within the body-effect approximation, neglect CLM and junction current:

$$V_{TH}=V_{TH0}+\gamma\left(\sqrt{2|\phi_F|+V_{SB}}-\sqrt{2|\phi_F|}\right).$$
$$I_D=\frac12\beta(V_{GS}-V_{TH})^2,\qquad g_m=\left.\frac{\partial I_D}{\partial V_{GS}}\right|_{V_{DS},V_{SB}}=\beta(V_{GS}-V_{TH}).$$

Substituting the given parameters gives (voltages in V in numerical expressions):

$$V_{TH}=0.7+0.45(\sqrt{1.9-V_X}-\sqrt{0.9}),$$
$$\frac{I_X}{\beta}=\frac12(0.9-V_{TH})^2,\qquad\frac{g_m}{\beta}=0.9-V_{TH}.$$

The modeled device is on, and is saturated while $V_{TH}\ge0.4$ V. No junction is forward biased over $0\le V_X\le1$ V; extension toward 1.5 V is conditional on negligible junction current.

| $V_X$ (V) | $I_X/\beta$ (V²) | $g_m/\beta$ (V) |
|---|---|---|
| 0 | $2.195\times10^{-5}$ | 0.006625 |
| 0.5 | 0.004461 | 0.09446 |
| 1 | 0.02000 | 0.2000 |
| 1.5, conditional extension | 0.05859 | 0.3423 |

Both modeled curves increase. Gate transconductance $g_m$ differs from the sweep slope. At fixed source, drain and gate potentials:

$$g_{mb}=\frac{\partial I_X}{\partial V_X}=g_m\frac{\gamma}{2\sqrt{2|\phi_F|+V_S-V_X}}.$$

The source–bulk junction is forward biased for $V_X>1$ V, and the drain–bulk junction also for $V_X>1.5$ V. These voltage relations are not universal high-current thresholds. Strong injection invalidates the square law; the total-current curve, plateau or sign over the remaining sweep to 3 V cannot be determined uniquely without junction, substrate and bipolar transport models. Near-zero-overdrive values are also only formal square-law results.

![R010: normalized current and gate transconductance](/q/R010/review-curves.svg)

## Grading notes

+2: correct fixed terminal voltages, body-effect threshold, saturated channel-current and transconductance curves in the supported range; identify forward junction bias and explicitly mark the upper range as underdetermined. Conditional extension toward 1.5 V is acceptable when flagged. Do not require an unsupported current sign, plateau or sharp universal diode threshold. Numerical tolerance: ±5% for nonzero modeled values; near-zero values may be reported as approximately zero with the model stated.

+1: low-bias MOS analysis correct but junction/model limits unclear, or one arithmetic slip.

0: extends the depletion/square-law model to 3 V without addressing forward junction injection.

-2 (asserted as fact): sweeps gate or drain instead of bulk; gives decreasing current over 0–1 V; or invents device parameters to claim a unique high-bias curve. Gate transconductance is the expected output; correctly identified bulk transconductance is also acceptable under the existing grading convention.
