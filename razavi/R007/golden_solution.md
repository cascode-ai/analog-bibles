# Golden Solution - R007

## Reference answer

Use $\beta=\mu_nC_{ox}W/L$, neglect channel-length modulation, and take $g_m$ as the positive magnitude of gate transconductance. Numerical voltage expressions below use volts.

### $0\le V_X<1$ V: reverse current, triode

The $V_X$ terminal is the source; $I_X=-I_D$. Body effect gives:

$$V_{TH}=0.7+0.45\left(\sqrt{0.9+V_X}-\sqrt{0.9}\right).$$

Since $0.700\le V_{TH}<0.893375<0.9$ V, the device stays in triode:

$$I_X=-\beta\left[(1.9-V_X-V_{TH})(1-V_X)-\frac12(1-V_X)^2\right],\qquad g_m=\beta(1-V_X).$$

| $V_X$ (V) | $I_X/\beta$ (V²) | $g_m/\beta$ (V) |
|---|---|---|
| 0 | −0.70000 | 1.00 |
| 0.5 | −0.17223 | 0.50 |
| 1 | 0 | 0 |

### $1<V_X<1.006625$ V: source swap, short triode interval

The 1-V terminal becomes the source. The threshold is $0.893375$ V and the overdrive $V_{ov}=V_{GS}-V_{TH}=0.006625$ V, approximately:

$$I_X=\beta\left[V_{ov}(V_X-1)-\frac12(V_X-1)^2\right],\qquad g_m=\beta(V_X-1).$$

### $1.006625\lesssim V_X\le3$ V: saturation

$$I_X=\frac12\beta V_{ov}^2\approx\beta(2.195\times10^{-5}\ \mathrm{V^2}),\qquad g_m=\beta V_{ov}\approx\beta(0.006625\ \mathrm V).$$

Current rises from negative values to zero at 1 V, then to a tiny positive plateau. Transconductance falls linearly to zero at 1 V, then rises to its small plateau. The 6.6-mV overdrive makes the plateau a formal square-law estimate; weak-inversion behavior is not accurately modeled.

The two required quantities have separate axes below, with enlarged views of the short interval. Only the plotted scale uses $\beta=1\ \mathrm{mA/V^2}$; multiply both vertical scales by $\beta/(1\ \mathrm{mA/V^2})$ for another size.

![R007: current and gate transconductance, full sweep and enlarged transition](/q/R007/solution-curves.svg)

## Grading notes

- +2: correct source swap, negative triode current below 1 V, zero crossing, body-effect threshold and near-zero upper plateaus; identify $g_m$ separately from $dI_X/dV_X$.
- +1: correct qualitative analysis without numbers, or consistent omission of body effect (saturation starts at 1.2 V, $I_X/\beta=0.020$ V² and $g_m/\beta=0.200$ V).
- 0: omits the negative-current interval while the upper interval is correct.
- −2: asserts positive current below 1 V, a large upper plateau, or a fixed source at the 1-V terminal throughout.

Approximately zero upper plateaus are acceptable when the near-threshold model limitation is stated.
