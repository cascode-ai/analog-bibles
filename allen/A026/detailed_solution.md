# Detailed solution - A026

Keep the gradual-channel derivation unchanged and only replace the constant $V_T$ by its position-dependent form. The inversion charge then falls faster along the channel, and integrating the same current relation from source to drain gives the modified triode equation.

### Step 1 — Inversion charge with a varying threshold

Substituting $V_T=V_{T0}+\alpha v(y)$ into $Q_I(y)=C_{ox}[v_{GS}-v(y)-V_T]$:

$$
Q_I(y)=C_{ox}\left[v_{GS}-V_{T0}-(1+\alpha)\,v(y)\right].
$$

The channel voltage now reduces the inversion charge with weight $1+\alpha$ instead of 1, because raising $v(y)$ both lowers the gate-to-channel voltage and raises the local threshold.

### Step 2 — Integrate from source to drain

The drain current is the same at every cross-section, so integrate $i_D\,dy=W\mu_nQ_I(y)\,dv$ with $y$ from 0 to $L$ and $v$ from 0 to $v_{DS}$:

$$
\int_0^L i_D\,dy=W\mu_nC_{ox}\int_0^{v_{DS}}\left[v_{GS}-V_{T0}-(1+\alpha)v\right]dv ,
$$

$$
i_DL=W\mu_nC_{ox}\left[(v_{GS}-V_{T0})v_{DS}-(1+\alpha)\frac{v_{DS}^2}{2}\right].
$$

### Step 3 — Result

$$
i_D=\frac{\mu_nC_{ox}W}{L}\left[(v_{GS}-V_{T0})v_{DS}-(1+\alpha)\frac{v_{DS}^2}{2}\right].
$$

With $\alpha=0$ it reduces to the constant-threshold expression, with $V_T=V_{T0}$.

### Step 4 — Consequence for saturation

Setting $\partial i_D/\partial v_{DS}=0$ gives the drain voltage at which the current peaks, where $Q_I(L)=0$ and the channel pinches off at the drain:

$$
v_{DS(sat)}=\frac{v_{GS}-V_{T0}}{1+\alpha},
\qquad
i_{D(sat)}=\frac{\mu_nC_{ox}W}{2(1+\alpha)L}\,(v_{GS}-V_{T0})^2 .
$$

The increase of the threshold along the channel (the body effect acting locally) lowers both the saturation voltage and the saturation current by the factor $1+\alpha$.
