# Detailed solution - A136

This is the complement of the n-channel-input stage: the p-channel pair M1–M2 shares the tail current $I_{SS}$ (labelled $I_{DD}$), and the n-channel mirror M3–M4 copies M1's current change to the output. The short-circuit output current equals the transconductance of one input device, now set by the p-channel $K'_P$, and the output resistance is again set by M2 and M4.

### Step 1 — Differential transconductance

With $v_{ID}=v_{G1}-v_{G2}$ and the common source node at ac ground for a differential signal, each device sees half the input. A rise of $v_{G1}$ lowers $v_{SG1}$, so

$$
i_{d1}=-\frac{g_{m1}v_{ID}}{2},\qquad i_{d2}=+\frac{g_{m2}v_{ID}}{2},\qquad i_{d4}=i_{d3}=i_{d1}.
$$

From [Fig. 1], $i_{OUT}=i_{D2}-i_{D4}$, so with the output shorted

$$
i_{out}=i_{d2}-i_{d1}=g_{m1}v_{ID},\qquad
g_{md}=g_{m1}=\sqrt{2K'_P\frac{W_1}{L_1}\frac{I_{SS}}{2}}=\sqrt{K'_PI_{SS}\frac{W_1}{L_1}} .
$$

### Step 2 — Output resistance

As for the n-channel version, with an ideal tail source the output conductance is to first order the sum of the drain conductances of M2 and M4, each at $I_{SS}/2=50$ µA:

$$
g_{ds2}+g_{ds4}=(\lambda_P+\lambda_N)\frac{I_{SS}}{2}=(0.09\ \mathrm{V^{-1}})(50\ \mu\mathrm A)=4.5\ \mu\mathrm S,\qquad R_{out}=222\ \mathrm{k\Omega},
$$

independent of the load $W/L$.

### Step 3 — Both cases

$A_v=g_{md}/(g_{ds2}+g_{ds4})$. For $W_1/L_1=1$:

$$
g_{md}=\sqrt{(50\ \mu\mathrm{A/V^2})(100\ \mu\mathrm A)(1)}=70.7\ \mu\mathrm S,\qquad
A_v=\frac{70.7\ \mu\mathrm S}{4.5\ \mu\mathrm S}=15.7\ \mathrm{V/V}.
$$

| $W_1/L_1=W_2/L_2$ | $W_3/L_3=W_4/L_4$ | $g_{md}$ | $R_{out}$ | $A_v$ |
|---|---|---|---|---|
| 1 | 1 | 70.7 µS | 222 kΩ | 15.7 V/V |
| 10 | 1 | 223.6 µS | 222 kΩ | 49.7 V/V |

The output resistance is the same as in the n-channel-input amplifier, so the gain is lower by $\sqrt{K'_N/K'_P}=1.48$, the ratio of the input transconductances. Including the finite mirror gain $g_{m3}/(g_{m3}+g_{ds3}+g_{ds1})=0.959$ (with $g_{m3}=104.9$ µS) lowers these values by about 2 %, to 15.4 and 48.7 V/V.
