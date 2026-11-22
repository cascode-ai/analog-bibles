# Detailed solution - grsim-07-47

Adding $C_L$ closes a loop of capacitors: $C$ (node $n$ to output $o$), $C_L$ (output to ground) and $C_{\text{in}}$ (ground to $n$). First verify that this makes every short-circuit time constant zero. Then compute the zero-value time constants, short the capacitor whose time constant dominates, and find the single time constant of the two capacitors left in parallel; its reciprocal estimates the nondominant pole. As in the circuit without $C_L$, the amplifier contributes the controlled source $a_vv_x=-a_vv_n$, since $v_x$ is measured from the grounded noninverting input to node $n$.

### Step 1 — Short-circuit time constants are all zero

The short-circuit time constant of one capacitor is found with every other capacitor shorted.

- **$C_{\text{in}}$:** shorting $C_L$ grounds $o$, and shorting $C$ then ties $n$ to $o$, so both terminals of $C_{\text{in}}$ are at ground and it sees $0\ \Omega$.
- **$C$:** shorting $C_{\text{in}}$ grounds $n$ and shorting $C_L$ grounds $o$, so $C$ sees $0\ \Omega$.
- **$C_L$:** shorting $C_{\text{in}}$ grounds $n$ and shorting $C$ ties $o$ to $n$, so $C_L$ sees $0\ \Omega$.

Each time constant is zero and the sum of reciprocals is infinite. The method fails because three capacitors in a loop have only two independent voltages, so the circuit has only two poles.

### Step 2 — Zero-value time constants

Short the input ($v_i=0$) and open the other capacitors in turn.

- **$C$:** a test current $i_x$ out of $o$ and into $n$ flows through $R$ ($v_n=i_xR$, $v_x=-i_xR$) and back through $R_o$ ($v_o=a_vv_x-i_xR_o$), so
$$
R_{C0}=R+R_o+a_vR=20\ \mathrm{k\Omega}+5\ \mathrm{k\Omega}+(1000)(20\ \mathrm{k\Omega})=20.025\ \mathrm{M\Omega},\qquad \tau_C^0=(20.025\ \mathrm{M\Omega})(50\ \mathrm{pF})=1.00125\ \mathrm{ms}.
$$
- **$C_{\text{in}}$:** only $R$ connects to $n$, so $\tau_{\text{in}}^0=(20\ \mathrm{k\Omega})(0.2\ \mathrm{pF})=4$ ns.
- **$C_L$:** with $C$ open, no current flows in $R$, so $v_n=0$, the Thevenin source is zero and the output sees $R_o$: $\tau_L^0=(5\ \mathrm{k\Omega})(0.5\ \mathrm{pF})=2.5$ ns.

$$
T_0=1.00125\ \mathrm{ms}+4\ \mathrm{ns}+2.5\ \mathrm{ns}=1.001257\ \mathrm{ms},\qquad |p_1|\approx\frac{1}{T_0}=998.7\ \mathrm{rad/s}\ (159.0\ \mathrm{Hz}).
$$

$\tau_C^0$ is about $2.5\times10^{5}$ times larger than either of the others, so $C$ clearly dominates.

### Step 3 — Shorting $C$: the nondominant pole

The denominator of the transfer function is $1+b_1s+b_2s^2$ with $b_1=T_0$ and, for this circuit,

$$
b_2=\tau_C^0\left(\tau_{\text{in}}^{C}+\tau_L^{C}\right)+\tau_{\text{in}}^0\tau_L^{\text{in}},
$$

where $\tau_j^{i}$ is the time constant of capacitor $j$ with capacitor $i$ shorted and the rest open. The last product is of order $(4\ \mathrm{ns})(2.5\ \mathrm{ns})$ and is negligible next to the first term. With widely separated poles, $|p_2|\approx b_1/b_2\approx\tau_C^0/[\tau_C^0(\tau_{\text{in}}^{C}+\tau_L^{C})]$, so the nondominant pole is set by the capacitors that remain when $C$ is shorted.

With $C$ shorted, $n$ and $o$ merge, and $C_{\text{in}}$ and $C_L$ are in parallel from that node to ground. A test voltage $v$ on the node draws $v/R$ through $R$ and $[v-(-a_vv)]/R_o$ through $R_o$:

$$
R_{\text{eq}}=R\parallel\frac{R_o}{1+a_v}=20\ \mathrm{k\Omega}\parallel\frac{5\ \mathrm{k\Omega}}{1001}=4.994\ \Omega,
$$

$$
\tau_2=R_{\text{eq}}(C_{\text{in}}+C_L)=(4.994\ \Omega)(0.7\ \mathrm{pF})=3.496\ \mathrm{ps},\qquad |p_2|\approx\frac{1}{\tau_2}=2.861\times10^{11}\ \mathrm{rad/s}\ (45.5\ \mathrm{GHz}).
$$

Without $C_L$ the same calculation gives $1/[(4.994\ \Omega)(0.2\ \mathrm{pF})]\approx1.0\times10^{12}$ rad/s, so the load capacitor lowers the nondominant pole by the factor $(C_{\text{in}}+C_L)/C_{\text{in}}=3.5$. The output and the inverting node move together at high frequency, and the feedback through $C$ makes the impedance of that node very low ($R_o/(1+a_v)$).

### Step 4 — SPICE comparison

The deck is the linear model with $C_L$ added.

```spice
* grsim-07-47 integrator with load capacitor
Vi i 0 dc 0 ac 1
R i n 20k
C n o 50p
Cin n 0 0.2p
Ea a 0 0 n 1000
Ro a o 5k
CL o 0 0.5p
.ac dec 50 0.01 10T
.pz i 0 o 0 vol pz
.end
```

| Quantity | Estimate | ngspice |
|---|---|---|
| Dominant pole $p_1$ | $-998.7$ rad/s | $-998.7$ rad/s |
| Nondominant pole $p_2$ | $-2.861\times10^{11}$ rad/s | $-2.853\times10^{11}$ rad/s |
| Zero | — | $+4.000\times10^{9}$ rad/s |
| Low-frequency gain | −1000 | 60.0 dB |

The simulation finds exactly two poles, as expected from the capacitor loop. The estimated nondominant pole is within 0.3 % of the simulated value, confirming that shorting the dominant capacitor and treating the remaining parallel capacitors as one gives a good estimate.
