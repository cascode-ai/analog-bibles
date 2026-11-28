# Golden Solution - R088

## Reference answer

For the illustrated example, the triode-region node equation at $V_{in}=0$ gives $V_{out}(0)\approx 0.186\ \mathrm{V}$. The body-effect cutoff satisfies $V_b-V_{in,off}=V_{TH}(V_{in,off})$, giving $V_{in,off}\approx 0.664\ \mathrm{V}$ for $V_b=1.5\ \mathrm{V}$.

The common-gate transfer rises to $(3\ \mathrm{V},3\ \mathrm{V})$. Define $u=V_b-V_{in}-V_{TH}(V_{in})$, with $V_{TH}(V_{in})=V_{TH0}+\gamma(\sqrt{2|\phi_F|+V_{in}}-\sqrt{2|\phi_F|})$.

- While $u>0$, solve $(V_{DD}-V_{out})/R_D=(V_{out}-V_{in})/R_F+I_{D1}$. For $V_{DS}=V_{out}-V_{in}$, use $I_{D1}=\beta(uV_{DS}-V_{DS}^2/2)$ when $0\le V_{DS}<u$, or $I_{D1}=\beta u^2/2$ when $V_{DS}\ge u$.
- The triode–saturation boundary, if present, satisfies $V_{out}=V_b-V_{TH}(V_{in})$. Substitute this voltage and $I_{D1}=\beta u^2/2$ into the node equation.
- At $u=0$ the device reaches cutoff if the crossing is within the sweep. With $I_{D1}=0$, $V_{out}=(R_FV_{DD}+R_DV_{in})/(R_D+R_F)$. The saturation curve joins this divider line with the same slope $R_D/(R_D+R_F)$.

![Example transfer characteristic](/q/R088/solution-01.svg)

## Grading notes

+2: monotonic rise from a low $V_{out}(0)$ to $V_{DD}$, cutoff at $V_{in} \approx V_b - V_{TH}$ (body effect from $V_{SB} = V_{in}$ mentioned or included), the straight divider line of slope $R_D/(R_D+R_F)$ above cutoff, and the triode/saturation boundary at $V_{out} = V_b - V_{TH}$. +1: shape and cutoff right but the divider line or the triode region missing, or body effect ignored. 0: rising curve but above cutoff $V_{out}$ claimed equal to $V_{DD}$ (ignoring $R_F$), or regions mislabelled while the trend is right. -2 (asserted as fact): inverting characteristic, $V_{in}$ treated as a gate input, or $R_F$ read as connected to ground or to the gate.

