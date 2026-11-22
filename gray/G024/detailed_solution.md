# Detailed solution - G024

Derive the drain current from the gradual-channel analysis with the given velocity–field relation, find where the current stops rising, and compare with the square law. The key parameter is $\mathcal E_cL$, the drain–source voltage that would produce the critical field along the whole channel: velocity saturation matters only when the overdrive is comparable to it.

### Step 1 — Triode current with velocity saturation

In the gradual-channel approximation the channel charge per unit length is $Q(y)=WC_{ox}[V_{GS}-V(y)-V_t]$ and $I_D=Q(y)v_d(y)$, with $\mathcal E=dV/dy$. Substituting $v_d=\mu_n\mathcal E/(1+\mathcal E/\mathcal E_c)$ and rearranging,

$$
I_D\left(1+\frac1{\mathcal E_c}\frac{dV}{dy}\right)=\mu_nC_{ox}W\,[V_{ov}-V]\frac{dV}{dy}.
$$

Integrating from $y=0$ ($V=0$) to $y=L$ ($V=V_{DS}$):

$$
I_D=\frac{\dfrac{k'}2\dfrac WL\left(2V_{ov}V_{DS}-V_{DS}^2\right)}{1+V_{DS}/(\mathcal E_cL)} .
$$

The numerator is the square-law triode current; velocity saturation divides it by $1+V_{DS}/(\mathcal E_cL)$.

### Step 2 — Where the current stops rising

Setting $dI_D/dV_{DS}=0$ gives $V_{DS}^2/(\mathcal E_cL)+2V_{DS}-2V_{ov}=0$, so

$$
V_{DS(act)}=\mathcal E_cL\left(\sqrt{1+\frac{2V_{ov}}{\mathcal E_cL}}-1\right),\qquad
I_{D(act)}=\frac{k'}2\frac WL\,V_{DS(act)}^2 ,
$$

where the second form follows by substituting the quadratic back into the triode expression. For larger $V_{DS}$ the current stays at this value ($\lambda=0$). Without velocity saturation ($\mathcal E_c\to\infty$), $V_{DS(act)}\to V_{ov}$ and $I_{D(act)}\to\tfrac12k'(W/L)V_{ov}^2$.

### Step 3 — Numerical values

Here $W/L=10$, so $\tfrac12k'(W/L)=0.97\ \mathrm{mA/V^2}$, and $\mathcal E_cL=(1.5\times10^6\ \mathrm{V/m})(1\ \mu\mathrm m)=1.5$ V. For $V_{GS}=3$ V ($V_{ov}=2.4$ V):

$$
V_{DS(act)}=(1.5\ \mathrm V)\left(\sqrt{1+\frac{4.8}{1.5}}-1\right)=1.57\ \mathrm V,\qquad
I_{D(act)}=(0.97\ \mathrm{mA/V^2})(1.57\ \mathrm V)^2=2.40\ \mathrm{mA}.
$$

| $V_{GS}$ (V) | $V_{ov}$ (V) | Square law: $I_D$ (mA) at $V_{DS}\ge V_{ov}$ | With v-sat: $V_{DS(act)}$ (V) | With v-sat: $I_D$ (mA) | Ratio |
|---|---|---|---|---|---|
| 1 | 0.4 | 0.155 | 0.357 | 0.124 | 0.80 |
| 2 | 1.4 | 1.90 | 1.04 | 1.05 | 0.55 |
| 3 | 2.4 | 5.59 | 1.57 | 2.40 | 0.43 |

In the triode region at $V_{GS}=3$ V the reduction is already visible: 0.95 vs 1.10 mA at $V_{DS}=0.25$ V and 2.21 vs 3.69 mA at 1 V.

### Step 4 — The curves

![ID–VDS curves for VGS = 1, 2 and 3 V with and without velocity saturation for the 10/1 device; the velocity-saturated currents are much lower](/q/G024/solution-curves.svg)

With $\mathcal E_cL=1.5$ V, comparable to the overdrives, velocity saturation lowers the current substantially, by 20%, 45% and 57% at $V_{GS}$ = 1, 2 and 3 V, and the curves flatten at lower $V_{DS}$ (0.36, 1.04 and 1.57 V instead of 0.4, 1.4 and 2.4 V). The velocity-saturated currents are also spaced more evenly, closer to linear in $V_{ov}$ than the square law. At $L=1\ \mu$m velocity saturation is a strong effect.
