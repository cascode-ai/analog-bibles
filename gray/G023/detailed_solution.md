# Detailed solution - G023

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

Here $W/L=10$, so $\tfrac12k'(W/L)=0.97\ \mathrm{mA/V^2}$, and $\mathcal E_cL=(1.5\times10^6\ \mathrm{V/m})(10\ \mu\mathrm m)=15$ V. For $V_{GS}=3$ V ($V_{ov}=2.4$ V):

$$
V_{DS(act)}=(15\ \mathrm V)\left(\sqrt{1+\frac{4.8}{15}}-1\right)=2.23\ \mathrm V,\qquad
I_{D(act)}=(0.97\ \mathrm{mA/V^2})(2.23\ \mathrm V)^2=4.84\ \mathrm{mA}.
$$

| $V_{GS}$ (V) | $V_{ov}$ (V) | Square law: $I_D$ (mA) at $V_{DS}\ge V_{ov}$ | With v-sat: $V_{DS(act)}$ (V) | With v-sat: $I_D$ (mA) | Ratio |
|---|---|---|---|---|---|
| 1 | 0.4 | 0.155 | 0.395 | 0.151 | 0.97 |
| 2 | 1.4 | 1.90 | 1.34 | 1.74 | 0.92 |
| 3 | 2.4 | 5.59 | 2.23 | 4.84 | 0.87 |

In the triode region at $V_{GS}=3$ V the reduction is smaller: 1.09 vs 1.10 mA at $V_{DS}=0.25$ V, 3.46 vs 3.69 mA at 1 V, and 4.79 vs 5.43 mA at 2 V.

### Step 4 — The curves

![ID–VDS curves for VGS = 1, 2 and 3 V with and without velocity saturation for the 100/10 device; the two families nearly coincide](/q/G023/solution-curves.svg)

Because $\mathcal E_cL=15$ V is much larger than every overdrive, the lateral field stays well below $\mathcal E_c$, and the two families nearly coincide. The difference grows with $V_{ov}$ and $V_{DS}$, from 3% at $V_{GS}=1$ V to 13% at 3 V, and the velocity-saturated curves flatten at slightly lower $V_{DS}$. For a 10-µm channel the square law is an adequate model.
