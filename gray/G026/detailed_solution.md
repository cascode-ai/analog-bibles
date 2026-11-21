# Detailed solution - G026

Compute the drain current two ways: directly, from the gradual-channel result with velocity saturation, and from the model of [Fig. 1], by solving the square-law transistor together with its source resistor. Writing both in terms of $\mathcal E_cL$ shows that they reduce to the same quadratic, so the model is exact for this velocity–field law. Body effect on the internal transistor is not part of the model and is ignored, as is $\lambda$.

### Step 1 — Parameters

$$
K=\frac{k'}2\frac WL=\frac{194\ \mu\mathrm{A/V^2}}2\cdot\frac{2}{0.5}=388\ \mu\mathrm{A/V^2},\qquad
\mathcal E_cL=(1.5\times10^6\ \mathrm{V/m})(0.5\ \mu\mathrm m)=0.75\ \mathrm V,
$$
$$
R_{SX}=\frac1{\mathcal E_ck'W}=\frac1{(1.5\times10^6\ \mathrm{V/m})(194\ \mu\mathrm{A/V^2})(2\ \mu\mathrm m)}=1.72\ \mathrm{k\Omega}=\frac1{2K\mathcal E_cL}.
$$

### Step 2 — Direct calculation from the gradual-channel equations

Integrating $I_D=WC_{ox}[V_{ov}-V(y)]\,v_d$ along the channel with $v_d=\mu_n\mathcal E/(1+\mathcal E/\mathcal E_c)$ gives the triode current

$$
I_D=\frac{K\left(2V_{ov}V_{DS}-V_{DS}^2\right)}{1+V_{DS}/(\mathcal E_cL)} .
$$

It reaches its maximum where $dI_D/dV_{DS}=0$, that is at the root of $V_{DS}^2/(\mathcal E_cL)+2V_{DS}-2V_{ov}=0$:

$$
V_{DS(act)}=\mathcal E_cL\left(\sqrt{1+\frac{2V_{ov}}{\mathcal E_cL}}-1\right),\qquad I_D=K\,V_{DS(act)}^2 .
$$

The largest value, at $V_{GS}=3$ V, is $V_{DS(act)}=1.29$ V, below $V_{DS}=3$ V, so the device is in the active region over the whole sweep. For $V_{GS}\le V_t=0.6$ V, $I_D=0$.

### Step 3 — Solving the model circuit

Let $V'_{ov}=V'_{GS}-V_t$ be the overdrive of the internal square-law device. Then

$$
I_D=K{V'_{ov}}^2,\qquad V_{GS}=V'_{GS}+I_DR_{SX}\ \Rightarrow\ V_{ov}=V'_{ov}+I_DR_{SX}.
$$

With $R_{SX}=1/(2K\mathcal E_cL)$, the drop is $I_DR_{SX}={V'_{ov}}^2/(2\mathcal E_cL)$, so

$$
V_{ov}=V'_{ov}+\frac{{V'_{ov}}^2}{2\mathcal E_cL}
\quad\Longleftrightarrow\quad
\frac{{V'_{ov}}^2}{\mathcal E_cL}+2V'_{ov}-2V_{ov}=0 .
$$

This is the same quadratic as in Step 2, so $V'_{ov}=V_{DS(act)}$ and the model current $K{V'_{ov}}^2$ equals the direct result exactly. The internal device is saturated, since its drain–source voltage $3\ \mathrm V-I_DR_{SX}\ge1.89$ V exceeds $V'_{ov}\le1.29$ V.

### Step 4 — Comparison and accuracy range

At $V_{GS}=2$ V ($V_{ov}=1.4$ V): $V'_{ov}=(0.75\ \mathrm V)\left(\sqrt{1+2.8/0.75}-1\right)=0.882$ V and $I_D=(388\ \mu\mathrm{A/V^2})(0.882\ \mathrm V)^2=0.302$ mA; check: $0.882\ \mathrm V+(0.302\ \mathrm{mA})(1.72\ \mathrm{k\Omega})=1.40$ V.

| $V_{GS}$ (V) | 1 | 1.5 | 2 | 2.5 | 3 |
|---|---|---|---|---|---|
| Direct, with v-sat (mA) | 0.0418 | 0.155 | 0.302 | 0.467 | 0.646 |
| Model of [Fig. 1] (mA) | 0.0418 | 0.155 | 0.302 | 0.467 | 0.646 |
| Square law, no v-sat (mA) | 0.062 | 0.314 | 0.760 | 1.40 | 2.23 |
| First-order $KV_{ov}^2/(1+V_{ov}/\mathcal E_cL)$ (mA) | 0.0405 | 0.143 | 0.265 | 0.396 | 0.532 |

The model therefore agrees with the direct calculation within 10%, in fact exactly, for all $V_{GS}$ from 0 to 3 V. Two approximations are not exact. Dropping the $(I_DR_{SX})^2$ term gives the closed form in the last row, which is 8% low at 1.5 V, 12% low at 2 V and 18% low at 3 V, i.e. within 10% only for $V_{GS}\lesssim1.7$ V. The same closed form is what the direct calculation gives if the active-region current is taken, as in the textbook derivation, by substituting $V_{DS}=V_{ov}$ into the triode expression instead of using its maximum; compared against that, the model is high by 14% at 2 V and 21% at 3 V and is within 10% only for $V_{GS}\lesssim1.6$–1.7 V.
