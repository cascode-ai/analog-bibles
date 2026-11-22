# Detailed solution - A141

For the mirror-loaded p-channel pair, the short-circuit output current per unit differential input equals the transconductance of one input device, and the unloaded gain is that times the output resistance $1/(g_{ds2}+g_{ds4})$. Writing both in terms of the tail current shows how each scales: $g_{md}\propto\sqrt{I_{SS}}$, $R_{out}\propto1/I_{SS}$, so $A_v\propto1/\sqrt{I_{SS}}$.

### Step 1 — Differential transconductance

At balance each input device carries $I_{SS}/2$. Raising $v_{G1}$ lowers $v_{SG1}$, so M1's current falls by $g_{m1}v_{id}/2$ while M2's rises by the same amount; the n-channel mirror copies M1's fall into M4, so M4 sinks less while M2 sources more. With $i_{OUT}=i_{D2}-i_{D4}$ from [Fig. 1], the short-circuit output current is $g_{m1}v_{id}$, positive for $v_{id}=v_{G1}-v_{G2}$:

$$
g_{md}=g_{m1}=\sqrt{2K'_P\frac{W_1}{L_1}\frac{I_{SS}}{2}}=\sqrt{K'_PI_{SS}\frac{W_1}{L_1}} .
$$

### Step 2 — Output resistance and gain

With an ideal tail source, the output conductance is to first order the sum of the drain conductances of M2 and M4, each at $I_{SS}/2$:

$$
R_{out}=\frac{1}{(\lambda_P+\lambda_N)I_{SS}/2},\qquad
A_v=g_{md}R_{out}=\frac{\sqrt{K'_PI_{SS}(W_1/L_1)}}{(\lambda_P+\lambda_N)I_{SS}/2}
=\frac{2}{\lambda_P+\lambda_N}\sqrt{\frac{K'_P(W_1/L_1)}{I_{SS}}} .
$$

The load $W/L$ does not enter.

### Step 3 — Numerical values

At $I_{SS}=10$ µA:

$$
g_{md}=\sqrt{(50\ \mu\mathrm{A/V^2})(10\ \mu\mathrm A)}\sqrt{W_1/L_1}=22.4\ \mu\mathrm S\cdot\sqrt{W_1/L_1},\qquad
R_{out}=\frac1{(0.09\ \mathrm{V^{-1}})(5\ \mu\mathrm A)}=2.22\ \mathrm{M\Omega},
$$

$$
A_v=(22.4\ \mu\mathrm S)(2.22\ \mathrm{M\Omega})\sqrt{W_1/L_1}=49.7\sqrt{W_1/L_1}.
$$

| $I_{SS}$ | $g_{md}$ | $R_{out}$ | $A_v$ | Values for $W_1/L_1=1$ |
|---|---|---|---|---|
| 10 µA | $22.4\ \mu\mathrm S\cdot\sqrt{W_1/L_1}$ | 2.22 MΩ | $49.7\sqrt{W_1/L_1}$ | 22.4 µS, 49.7 V/V |
| 1 µA | $7.07\ \mu\mathrm S\cdot\sqrt{W_1/L_1}$ | 22.2 MΩ | $157\sqrt{W_1/L_1}$ | 7.07 µS, 157 V/V |

Reducing the tail current tenfold lowers $g_{md}$ by $\sqrt{10}$ but raises $R_{out}$ by 10, so the gain rises by $\sqrt{10}=3.16$, as long as the devices stay in strong inversion.
