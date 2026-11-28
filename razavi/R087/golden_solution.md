# Golden Solution - R087

## Reference answer

### Swing and gain constraints

With both devices saturated, the nominal headroom and the small-signal gain at $I_D=1\ \mathrm{mA}$ give

$$V_{ov1}+|V_{ov2}|=V_{DD}-2.2\ \mathrm V=0.8\ \mathrm V,\qquad
|A_v|=g_{m1}(r_{O1}\parallel r_{O2})
=\frac{2}{V_{ov1}(\lambda_1+\lambda_2)}=100.$$

$$\lambda_1=\frac{0.05\ \mu\mathrm{m/V}}{L_1},\qquad
\lambda_2=\frac{0.10\ \mu\mathrm{m/V}}{L_2}.$$

### One valid design

Choose $V_{ov1}=|V_{ov2}|=0.4\ \mathrm V$ and $L_1=L_2=L$. Use the leading-order square law for DC sizing and retain channel-length modulation in $r_{Oi}$.

$$L=\frac{100}{2}(0.15\ \mu\mathrm{m/V})V_{ov1}=3\ \mu\mathrm m,\qquad
W_i=L_i\frac{2I_D}{\mu_i C_{ox}|V_{ovi}|^2}.$$

| Device | $L$ (μm) | $W$ (μm) | $r_O$ (kΩ) |
|---|---:|---:|---:|
| $M_1$ | 3 | 280 | 60 |
| $M_2$ | 3 | 977 | 30 |

The nominal output range is $0.4$ to $2.6\ \mathrm V$. With $g_{m1}=2I_D/V_{ov1}=5\ \mathrm{mS}$, $A_v=-100\ \mathrm{V/V}$.

## Grading notes

Any design satisfying both constraints is acceptable. Check that the overdrives inferred from the dimensions at 1 mA sum to about 0.8 V and that the gain magnitude with $\lambda$ scaled as $1/L$ is 100 within ±10%.

- +2 for a complete design giving $W$ and $L$ of both devices, satisfying both constraints and stating the choices that select that design.
- +1 for the correct constraints and a design within ±20% of one target, or correct $W/L$ ratios with lengths left open and the correct gain constraint.
- 0 for using only the swing constraint correctly.
- −2 for claiming 100 without the required $\lambda$ scaling, including threshold voltages in the swing budget, using $\mu_nC_{ox}$ to size the PMOS, or asserting uniqueness without justification and giving an incorrect design.
