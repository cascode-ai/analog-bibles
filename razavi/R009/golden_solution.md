# Golden Solution - R009

## Reference answer

Use $\beta_p=\mu_pC_{ox}W/L$ and neglect CLM. The PMOS body-effect threshold is:

$$|V_{TH}|=|V_{TH0}|+\gamma\left(\sqrt{2|\phi_F|+V_{BS}}-\sqrt{2|\phi_F|}\right).$$

While conducting, the general drain-current magnitude and gate-transconductance relations are:

**Saturation:** $V_{SD}\ge V_{SG}-|V_{TH}|>0$,

$$|I_D|=\frac12\beta_p(V_{SG}-|V_{TH}|)^2,\qquad g_m=\beta_p(V_{SG}-|V_{TH}|).$$

**Triode:** $0\le V_{SD}<V_{SG}-|V_{TH}|$,

$$|I_D|=\beta_p\left[(V_{SG}-|V_{TH}|)V_{SD}-\frac12V_{SD}^2\right],\qquad g_m=\beta_pV_{SD}.$$

Both quantities are zero in cutoff within the square-law model. On the conducting branch with body effect included, current follows the given arrow, so $I_X=|I_D|$.

Substituting the given parameters gives:

For $V_X\le1.9$ V the source is the 1.9-V terminal: $V_{SG}=0.9$ V but $|V_{TH}|=0.994$ V, so the PMOS is off.

For $V_X>1.9$ V the source is the $V_X$ terminal. With voltages in V,
$$|V_{TH}|=0.8+0.4(\sqrt{3.8-V_X}-\sqrt{0.8}),\quad V_{SG}=V_X-1,\quad V_{SD}=V_X-1.9.$$
Turn-on solves $V_X-1=|V_{TH}|$ at about 1.982 V; the saturation/triode boundary solves $|V_{TH}|=0.9$ V at about 2.490 V.

| Range (V) | $I_X/\beta_p$ (V²) | $g_m/\beta_p$ (V) |
|---|---|---|
| $V_X\le1.982$ | 0 | 0 |
| $1.982<V_X\le2.490$ | $\tfrac12(V_X-1-|V_{TH}|)^2$ | $V_X-1-|V_{TH}|$ |
| $2.490<V_X\le3$ | $(V_X-1-|V_{TH}|)(V_X-1.9)-\tfrac12(V_X-1.9)^2$ | $V_X-1.9$ |

Current is positive along the arrow. At 3 V, $I_X/\beta_p=0.715$ V² and $g_m/\beta_p=1.10$ V. Without body effect there is reverse saturation below 1.8 V, reverse triode from 1.8 to 1.9 V, a zero crossing at 1.9 V, and forward triode above 1.9 V.


![R009 model curves; beta_p for R009; high-bias R010 unresolved](/q/R009/review-curves.svg)

## Grading notes

+2: PMOS recognized with source = higher-potential terminal; body effect (bulk at 3 V) keeps $M_1$ off up to ≈ 1.98 V (±0.05 V); conduction above with $I_X > 0$, saturation then triode (transition ≈ 2.5 V), $I_X$ ≈ 0.7β_p at 3 V; $g_m$ rising from 0 to ≈ 1.1β_p. +1: body effect neglected (small −0.005β_p region below 1.8 V, zero crossing at 1.9 V) with an otherwise correct analysis, or correct regions without values. 0: correct turn-on but the region of operation above it wrong. -2 (asserted as fact): $M_1$ treated as an NMOS, source fixed at the 1.9-V node for all $V_X$, or large conduction for small $V_X$.
