# Detailed solution - A135

The tail current $I_{SS}$ splits equally at $v_{ID}=0$, so each input transistor runs at $I_{SS}/2$. A differential input steers current between M1 and M2; the mirror M3–M4 copies M1's current change to the output node, where it adds to M2's change of opposite sign. The short-circuit output current therefore equals the full transconductance of one input device. The voltage gain is that transconductance times the output resistance, set by M2 and M4 alone.

### Step 1 — Differential transconductance

With $v_{ID}=v_{G1}-v_{G2}$ and the source node of M1–M2 at ac ground for a differential signal (by symmetry), each input device sees $\pm v_{ID}/2$:

$$
i_{d1}=\frac{g_{m1}v_{ID}}{2},\qquad i_{d2}=-\frac{g_{m2}v_{ID}}{2}.
$$

With an ideal mirror, $i_{d4}=i_{d3}=i_{d1}$. From [Fig. 1], $i_{OUT}=i_{D4}-i_{D2}$, so with the output shorted

$$
i_{out}=i_{d1}-i_{d2}=g_{m1}v_{ID},\qquad g_{md}=g_{m1}=g_{m2}.
$$

Each input transistor carries $I_{SS}/2$, so

$$
g_{md}=\sqrt{2K'_N\frac{W_1}{L_1}\frac{I_{SS}}{2}}=\sqrt{K'_NI_{SS}\frac{W_1}{L_1}} .
$$

### Step 2 — Output resistance

With the inputs grounded and an ideal tail source, a test voltage at the output drives a current through $r_{ds4}$ and through M2. The current entering M2 cannot change the tail current, so it returns through M1, M3 and the mirror M4, which roughly doubles it while halving the voltage across $r_{ds2}$. To first order the output conductance is the sum of the drain conductances of M2 and M4, both carrying $I_{SS}/2=50$ µA:

$$
g_{ds2}+g_{ds4}=(\lambda_N+\lambda_P)\frac{I_{SS}}{2}=(0.09\ \mathrm{V^{-1}})(50\ \mu\mathrm A)=4.5\ \mu\mathrm S,\qquad
R_{out}=222\ \mathrm{k\Omega}.
$$

This is the same in both cases: the load $W/L$ does not enter, because $g_{ds}$ depends only on $\lambda$ and the current.

### Step 3 — Both cases

$A_v=v_{out}/v_{ID}=g_{md}R_{out}=g_{md}/(g_{ds2}+g_{ds4})$. For $W_1/L_1=1$:

$$
g_{md}=\sqrt{(110\ \mu\mathrm{A/V^2})(100\ \mu\mathrm A)(1)}=104.9\ \mu\mathrm S,\qquad
A_v=\frac{104.9\ \mu\mathrm S}{4.5\ \mu\mathrm S}=23.3\ \mathrm{V/V}.
$$

| $W_1/L_1=W_2/L_2$ | $W_3/L_3=W_4/L_4$ | $g_{md}$ | $R_{out}$ | $A_v$ |
|---|---|---|---|---|
| 1 | 1 | 104.9 µS | 222 kΩ | 23.3 V/V |
| 10 | 1 | 331.7 µS | 222 kΩ | 73.7 V/V |

Increasing the input $W/L$ tenfold raises $g_{md}$, and hence the gain, by $\sqrt{10}$.

### Step 4 — Finite mirror gain

The diode node of M3 is loaded by $g_{m3}+g_{ds3}+g_{ds1}$, so the mirror copies M1's current with gain $g_{m3}/(g_{m3}+g_{ds3}+g_{ds1})$. With $g_{m3}=\sqrt{2(50\ \mu\mathrm{A/V^2})(50\ \mu\mathrm A)}=70.7$ µS, $g_{ds3}=2.5$ µS and $g_{ds1}=2$ µS, this is 0.940. Then $g_{md}=\tfrac{g_{m1}}{2}(1+0.940)$, giving 101.7 µS and 22.6 V/V for $W_1/L_1=1$, and 321.7 µS and 71.5 V/V for $W_1/L_1=10$, within about 3 % of the ideal-mirror values.
