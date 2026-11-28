# Golden Solution - R094

## Reference answer

Let $a=V_b-0.7\ \mathrm V>0$, $y=2.2\ \mathrm V-V_{in}$, and $v=V_{out}$. The output solves

$$I_{D1}(v)=\frac{V_{DD}-v}{R_D}+|I_{D2}(y,V_{DD}-v)|.$$

The NMOS uses $\beta_1(av-v^2/2)$ for $v<a$ and $I_1=\beta_1a^2/2$ for $v\ge a$. The PMOS uses its triode law for $0\le V_{DD}-v<y$, the saturation law $\beta_2y^2/2$ for $V_{DD}-v\ge y>0$, and zero for $y\le0$.

### Transitions

- PMOS triode to saturation: solve $I_{D1}(V_{DD}-y_*)=y_*/R_D+\beta_2y_*^2/2$ for $0<y_*\le2.2\ \mathrm V$. The input is $2.2\ \mathrm V-y_*$. When both devices saturate the slope is $-g_{m2}R_D$.
- If the output crosses $v=a$, the NMOS enters triode. Substitute $v=a$ into KCL to locate that input. Use the actual PMOS region.
- At $V_{in}=2.2\ \mathrm V$ the PMOS cuts off. The plateau solves $I_{D1}(v)=(V_{DD}-v)/R_D$ and equals $V_{DD}-R_DI_1$ if that value is at least $a$. When the NMOS is in triode, use the physical root in $0<v<a$.

![R094 output transfer characteristic](/q/R094/solution-vout.svg)

## Grading notes

- +2 for inverting curve with $M_2$ as the input device: high $V_{out}$ (M2 triode) at small $V_{in}$, a falling region with gain ≈ $g_{m2}R_D$ when $M_2$ is saturated, cutoff of $M_2$ at $V_{in} = V_{DD} - |V_{THP}| = 2.2$ V with a flat floor ≈ $V_{DD} - I_1R_D$ beyond.
- +1 for one of these features missing (e.g., the floor level or the $M_1$ triode caveat).
- 0 for correct trend but the cutoff at 2.2 V missing or misplaced.
- −2 for asserting non-inverting, $V_{out}$ falling to 0 V when $M_2$ is off (ignoring $R_D$), or $M_1$ treated as the input device.
