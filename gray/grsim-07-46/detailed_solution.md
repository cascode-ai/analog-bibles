# Detailed solution - grsim-07-46

The circuit has two capacitors, $C$ and $C_{\text{in}}$, so its transfer function has two poles. Zero-value time constants (both capacitors open, $RC$ products summed) estimate the dominant pole; short-circuit time constants (the other capacitor shorted, reciprocals summed) estimate the nondominant pole. The amplifier enters through its controlled source: since $v_x$ is measured from the grounded noninverting input to the inverting node $n$, $v_x=-v_n$ and the Thevenin source is $a_vv_x=-a_vv_n$. An ngspice pole-zero analysis of the same linear circuit gives the exact poles.

### Step 1 — (a) Zero-value time constants: dominant pole

Short the input ($v_i=0$), so $R$ connects node $n$ to ground, and open both capacitors.

- **$C$** (from $n$ to the output $o$). Drive a test current $i_x$ out of $o$ and into $n$. All of it flows through $R$, so $v_n=i_xR$ and $v_x=-i_xR$. The same $i_x$ flows out through $R_o$, so $v_o=a_vv_x-i_xR_o=-(a_vR+R_o)i_x$. Hence
$$
R_{C0}=\frac{v_n-v_o}{i_x}=R+R_o+a_vR=20\ \mathrm{k\Omega}+5\ \mathrm{k\Omega}+(1000)(20\ \mathrm{k\Omega})=20.025\ \mathrm{M\Omega},
$$
and $R_{C0}C=(20.025\ \mathrm{M\Omega})(50\ \mathrm{pF})=1.00125$ ms. The factor $a_vR$ is the Miller multiplication of the feedback capacitor.
- **$C_{\text{in}}$** (from $n$ to ground). With $C$ open, nothing but $R$ connects to $n$: $RC_{\text{in}}=(20\ \mathrm{k\Omega})(0.2\ \mathrm{pF})=4$ ns.

$$
T_0=1.00125\ \mathrm{ms}+4\ \mathrm{ns}=1.001254\ \mathrm{ms},\qquad |p_1|\approx\frac{1}{T_0}=998.7\ \mathrm{rad/s}\ (159.0\ \mathrm{Hz}).
$$

### Step 2 — (a) Short-circuit time constants: nondominant pole

- **$C$ with $C_{\text{in}}$ shorted.** Node $n$ is grounded, so $v_x=0$ and the Thevenin source is zero. $C$ sees $R_o$ from the output to ground: $R_oC=(5\ \mathrm{k\Omega})(50\ \mathrm{pF})=0.25\ \mu$s.
- **$C_{\text{in}}$ with $C$ shorted.** Node $n$ is tied to the output, so the amplifier is in unity feedback. A test voltage $v$ at $n$ draws $v/R$ through $R$ and $[v-(-a_vv)]/R_o$ through $R_o$:
$$
R_{\text{in},s}=R\parallel\frac{R_o}{1+a_v}=20\ \mathrm{k\Omega}\parallel\frac{5\ \mathrm{k\Omega}}{1001}=4.994\ \Omega,
$$
so $R_{\text{in},s}C_{\text{in}}=0.9988$ ps.

$$
|p_2|\approx\frac{1}{0.9988\ \mathrm{ps}}+\frac{1}{0.25\ \mu\mathrm{s}}=1.00125\times10^{12}+4\times10^{6}=1.0013\times10^{12}\ \mathrm{rad/s}\ (159\ \mathrm{GHz}).
$$

The low-frequency gain is $-a_v=-1000$: at dc, $C$ is open and the amplifier simply amplifies $v_x=-v_i$. Above $|p_1|$ the circuit integrates, with unity gain near $1/(2\pi RC)=159$ kHz.

### Step 3 — (b) SPICE comparison

The deck models the amplifier exactly as described: a voltage-controlled voltage source of gain 1000 controlled by $v_x=0-v_n$, in series with $R_o$.

```spice
* grsim-07-46 integrator, amplifier macromodel
Vi i 0 dc 0 ac 1
R i n 20k
C n o 50p
Cin n 0 0.2p
Ea a 0 0 n 1000
Ro a o 5k
.ac dec 50 0.01 10T
.pz i 0 o 0 vol pz
.end
```

| Quantity | Estimate | ngspice |
|---|---|---|
| Low-frequency gain | −1000 (60 dB) | 60.0 dB |
| Dominant pole $p_1$ | $-998.7$ rad/s (159.0 Hz) | $-998.7$ rad/s; −3 dB at 158.6 Hz |
| Nondominant pole $p_2$ | $-1.0013\times10^{12}$ rad/s | $-1.0013\times10^{12}$ rad/s |
| Zero | $+a_v/(R_oC)=4\times10^{9}$ rad/s | $+4.000\times10^{9}$ rad/s (right half-plane) |
| Unity-gain frequency | ≈ 159 kHz | 159.0 kHz |

The estimates agree with the exact poles to four significant figures. The poles are about $10^9$ apart, so the zero-value sum is essentially $1/|p_1|$ and the short-circuit sum is essentially $|p_2|$. The right-half-plane zero comes from the input current fed forward through $C$ into $R_o$; it lies between the two poles but far above the integrating range.
