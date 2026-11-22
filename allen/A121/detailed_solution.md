# Detailed solution - A121

The input device is the p-channel M1; the n-channel M2, with its gate at a dc voltage, is a current sink that contributes only its output conductance. The gain is therefore $A_v=-g_{m1}/(g_{ds1}+g_{ds2})$ in every region. What changes with current is how $g_{m1}$ depends on $I_D$: square-root in strong inversion, linear in weak inversion. Derive $g_m$ and $g_{ds}$ from each large-signal model, then evaluate the three currents.

### Step 1 — Gain expression

At the output, M1 supplies $g_{m1}v_{sg1}=-g_{m1}v_{in}$ (its source is at $V_{DD}$, ac ground). M2 has $v_{gs2}=0$, so only $g_{ds2}$ remains, and KCL gives

$$
-g_{m1}v_{in}=(g_{ds1}+g_{ds2})v_{out}
\quad\Rightarrow\quad
A_v=-\frac{g_{m1}}{g_{ds1}+g_{ds2}} .
$$

### Step 2 — Output conductances

Both models carry the factor $(1+\lambda v_{DS})$, so in either region

$$
g_{ds}=\frac{\partial i_D}{\partial v_{DS}}=\frac{\lambda I_D}{1+\lambda V_{DS}}\approx\lambda I_D,
\qquad g_{ds1}+g_{ds2}=(\lambda_P+\lambda_N)I_D=(0.09\ \mathrm{V^{-1}})\,I_D .
$$

### Step 3 — Strong inversion: 5 µA and 100 µA

Differentiating the square law with respect to $v_{SG}$ gives $g_{m1}=\sqrt{2K'_P(W_1/L_1)I_D}$, with $K'_P(W_1/L_1)=(50\ \mu\mathrm{A/V^2})(2)=100\ \mu\mathrm{A/V^2}$. At 5 µA:

$$
g_{m1}=\sqrt{2(100\ \mu\mathrm{A/V^2})(5\ \mu\mathrm A)}=31.6\ \mu\mathrm S,\qquad
A_v=-\frac{31.6\ \mu\mathrm S}{(0.09\ \mathrm{V^{-1}})(5\ \mu\mathrm A)}=-\frac{31.6}{0.45}=-70.3\ \mathrm{V/V}.
$$

In general $A_v=-\sqrt{2K'_P(W_1/L_1)}\,/\left[(\lambda_P+\lambda_N)\sqrt{I_D}\right]\propto1/\sqrt{I_D}$; at 100 µA, $g_{m1}=141.4$ µS, $g_{ds1}+g_{ds2}=9$ µS and $A_v=-15.7$ V/V.

### Step 4 — Weak inversion: 0.1 µA

For the p-channel device $i_D=(W/L)I_{D0}\exp[v_{SG}/(n_pkT/q)](1+\lambda v_{SD})$. Differentiating the exponential,

$$
g_{m1}=\frac{\partial i_D}{\partial v_{SG}}=\frac{I_D}{n_p\,kT/q}=\frac{0.1\ \mu\mathrm A}{2.5(26\ \mathrm{mV})}=1.54\ \mu\mathrm S .
$$

With $g_{ds1}+g_{ds2}=(0.09\ \mathrm{V^{-1}})(0.1\ \mu\mathrm A)=9$ nS,

$$
A_v=-\frac{I_D/(n_pkT/q)}{(\lambda_P+\lambda_N)I_D}=-\frac{1}{n_p(kT/q)(\lambda_P+\lambda_N)}=-\frac{1}{(2.5)(0.026\ \mathrm V)(0.09\ \mathrm{V^{-1}})}=-171\ \mathrm{V/V}.
$$

The current cancels: in weak inversion the gain no longer rises as the current falls. Applying the square-law formula at 0.1 µA would wrongly give about $-497$.

### Step 5 — Summary

| $I_D$ | Region | $g_{m1}$ | $g_{ds1}+g_{ds2}$ | $A_v$ |
|---|---|---|---|---|
| 0.1 µA | weak inversion | 1.54 µS | 9 nS | −171 V/V |
| 5 µA | strong inversion | 31.6 µS | 0.45 µS | −70.3 V/V |
| 100 µA | strong inversion | 141.4 µS | 9 µS | −15.7 V/V |

The gain magnitude grows as $1/\sqrt{I_D}$ while the devices are in strong inversion and levels off at $-171$ V/V once they enter weak inversion, where $g_m/I_D$ reaches its maximum $1/(n_pkT/q)$.
