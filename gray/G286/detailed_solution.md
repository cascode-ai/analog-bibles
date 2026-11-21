# Detailed solution - G286

The return ratio of a controlled source is found by setting every independent source to zero, replacing the controlled source by a test source $v_t$, and computing the signal $v_r$ that the circuit returns to the source's place: $\mathcal R=-v_r/v_t$. Apply this to [Fig. 2], then compare with [Fig. 1] after its source is zeroed.

### Step 1 — Zeroed network of [Fig. 2]

Setting $I_i=0$ turns the current source into an open circuit, so nothing else is attached to the inverting node. That node then has $R_1$ to ground and, because the non-inverting input is grounded, $R_i$ also to ground:
$$
R_1\|R_i=200\ \mathrm{k\Omega}\|50\ \mathrm{k\Omega}=40\ \mathrm{k\Omega}.
$$
Replacing $a_v(v_+-v_-)$ by $v_t$, the test source drives the series path $R_o+R_2$ into this 40 kΩ.

### Step 2 — Return ratio

The voltage divider gives
$$
v_-=v_t\frac{R_1\|R_i}{R_o+R_2+R_1\|R_i}=v_t\frac{40\ \mathrm{k\Omega}}{1000\ \mathrm{k\Omega}+100\ \mathrm{k\Omega}+40\ \mathrm{k\Omega}}=0.03509\,v_t .
$$
The controlling voltage is $v_x=v_+-v_-=-v_-$, so the returned signal is $v_r=a_vv_x=-a_v(0.03509)v_t$, and
$$
\mathcal R=-\frac{v_r}{v_t}=a_v\frac{R_1\|R_i}{R_o+R_2+R_1\|R_i}=1000\times0.03509=35.1 .
$$

### Step 3 — Why [Fig. 1] gives the same value

In [Fig. 1] the independent source is the voltage $V_i$ at the non-inverting input. Setting $V_i=0$ replaces it by a short, which grounds the non-inverting input. The resulting network is again $R_o+R_2$ from the controlled source to the inverting node, with $R_1$ and $R_i$ from that node to ground: exactly the network of Step 1.

In [Fig. 2], zeroing $I_i$ leaves an open circuit at the inverting node, which adds nothing. So the two circuits differ only in the independent source, and the return ratio, defined with all independent sources zeroed, does not see that difference. It is a property of the loop around $a_v$, not of where or how the input signal is applied. Both circuits therefore have $\mathcal R\approx35.1$.

By contrast, the two-port loop gains of the two connections (about 66 for series-shunt and 26 for shunt-shunt) differ, because each two-port split assigns the feedback-network loading under different port terminations.
