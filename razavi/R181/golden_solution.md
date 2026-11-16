# Golden Solution - R181

## Reference answer

An inverting, odd-symmetric S-curve centered at $V_{in1} = V_{in2} = 1.5$ V: $V_{out} = +V_{sat}$ for low $V_{in1}$, a transition through zero with slope $dV_{out}/d(V_{in1} - V_{in2}) = -g_{m1}(1/g_{m3}\|R_1/2)$, and $V_{out} = -V_{sat}$ for high $V_{in1}$, with $0 < V_{sat} < \sqrt{2I_{SS}/\beta_p}$.
- The input CM level stays at 1.5 V, so the pair steers all of $I_{SS}$ to one side except for $|V_{in1} - V_{in2}| < \sqrt{2I_{SS}/\beta_n}$ (a narrow window around $V_{in1} = 1.5$ V); outside it $V_{out}$ is flat.
- At balance $R_1$ carries no current; both outputs sit at $V_{DD} - |V_{THP}| - \sqrt{I_{SS}/\beta_p}$. For differential signals the midpoint of $R_1$ is a virtual ground, so each side sees $1/g_{m3}\|R_1/2$.
- Saturation level: with $M_1$ off, the current $I_R$ of diode $M_3$ flows through $R_1$ into the right node, and $M_4$ supplies $I_{SS} - I_R$: $V_{sat} = I_RR_1 = \sqrt{2/\beta_p}\,(\sqrt{I_{SS} - I_R} - \sqrt{I_R})$. Thus $V_{sat} \approx I_{SS}R_1/2$ for small $R_1$ and approaches the plain diode-load value $\sqrt{2I_{SS}/\beta_p}$ as $R_1 \to \infty$. The off-side output sits at $2.2\ \mathrm{V} - \sqrt{2I_R/\beta_p}$: just below 2.2 V when $R_1$ is large ($I_R \to 0$), and near the balanced level $2.2 - \sqrt{I_{SS}/\beta_p}$ when $R_1$ is small ($I_R \to I_{SS}/2$).
- $R_1$ lowers both the gain and the swing compared with plain diode loads.

## Grading notes

+2: inverting S-curve centered at $V_{in1} = V_{in2}$, flat once the current is fully steered, central slope $-g_{m1}(1/g_{m3}\|R_1/2)$, and a saturation level set by the diodes and reduced by $R_1$ (any correct expression or description of $V_{sat}$). +1: correct shape and slope, but the saturation level stated as exactly $\sqrt{2I_{SS}/\beta_p}$ (ignoring the current through $R_1$) or exactly $I_{SS}R_1/2$. 0: correct shape only, slope or levels wrong (e.g., $R_1$ used per side instead of $R_1/2$). -2 (asserted as fact): a non-inverting curve, $V_{out}$ varying linearly over the whole 0–3 V sweep, outputs reaching $V_{DD}$ or ground, or $R_1$ claimed to shift the output CM level.
