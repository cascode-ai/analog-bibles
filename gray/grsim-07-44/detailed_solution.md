# Detailed solution - grsim-07-44

Replace the transistor by its hybrid-π model. With $C_{cs}=0$ and $V_A=\infty$ the circuit has two capacitors, $C_\pi$ and $C_\mu$, and hence two poles. Zero-value time constants (both capacitors open, $RC$ products summed) estimate the dominant pole; short-circuit time constants (one capacitor shorted, reciprocals summed) estimate the nondominant pole. An ngspice pole-zero analysis of the same linear circuit checks both.

### Step 1 — Hybrid-π parameters

For a bipolar transistor in the forward-active region, $g_m=I_C/V_T$, $r_\pi=\beta/g_m$, and $f_T=g_m/[2\pi(C_\pi+C_\mu)]$:

$$
\begin{aligned}
g_m&=\frac{0.5\ \mathrm{mA}}{26\ \mathrm{mV}}=19.23\ \mathrm{mA/V},\qquad r_\pi=\frac{200}{19.23\ \mathrm{mA/V}}=10.4\ \mathrm{k\Omega},\\
C_\pi&=\frac{g_m}{2\pi f_T}-C_\mu=\frac{19.23\ \mathrm{mA/V}}{2\pi(500\ \mathrm{MHz})}-0.3\ \mathrm{pF}=6.121\ \mathrm{pF}-0.3\ \mathrm{pF}=5.821\ \mathrm{pF}.
\end{aligned}
$$

The source resistance seen from the internal base is $R_S+r_b=5.3\ \mathrm{k\Omega}$. The low-frequency gain is $-g_mR_L\,r_\pi/(r_\pi+R_S+r_b)=-38.2$.

### Step 2 — (a) Zero-value time constants: dominant pole

With both capacitors open and the source shorted:

- **$C_\pi$** sees the base-emitter terminals: $R_{\pi0}=(R_S+r_b)\parallel r_\pi=5.3\ \mathrm{k\Omega}\parallel10.4\ \mathrm{k\Omega}=3.511\ \mathrm{k\Omega}$, so $R_{\pi0}C_\pi=20.44$ ns.
- **$C_\mu$** sees base to collector. A test current $i_x$ from collector to base gives $v_\pi=i_xR_{\pi0}$ and a collector voltage $-(i_x+g_mv_\pi)R_L$, so
$$
R_{\mu0}=R_{\pi0}+R_L+g_mR_LR_{\pi0}=3.511\ \mathrm{k\Omega}+3\ \mathrm{k\Omega}+(19.23\ \mathrm{mA/V})(3\ \mathrm{k\Omega})(3.511\ \mathrm{k\Omega})=209.1\ \mathrm{k\Omega},
$$
and $R_{\mu0}C_\mu=62.72$ ns. This is the Miller-multiplied term and dominates.

$$
T_0=20.44\ \mathrm{ns}+62.72\ \mathrm{ns}=83.16\ \mathrm{ns},\qquad |p_1|\approx\frac{1}{T_0}=1.203\times10^{7}\ \mathrm{rad/s}\ (1.914\ \mathrm{MHz}).
$$

### Step 3 — (a) Short-circuit time constants: nondominant pole

- **$C_\mu$ with $C_\pi$ shorted.** Base and emitter are joined, so $v_\pi=0$ and the controlled source is off. $C_\mu$ sees $R_L$ to the base node, which is now ground: $R_LC_\mu=(3\ \mathrm{k\Omega})(0.3\ \mathrm{pF})=0.9$ ns.
- **$C_\pi$ with $C_\mu$ shorted.** Base and collector are joined, so the controlled source $g_mv_\pi$ flows from the base node to ground and acts as a resistance $1/g_m$. It is in parallel with everything else at that node:
$$
R_{\pi s}=(R_S+r_b)\parallel r_\pi\parallel R_L\parallel\frac{1}{g_m}=3.511\ \mathrm{k\Omega}\parallel3\ \mathrm{k\Omega}\parallel52\ \Omega=50.38\ \Omega,
$$
so $R_{\pi s}C_\pi=0.2933$ ns.

$$
|p_2|\approx\frac{1}{0.9\ \mathrm{ns}}+\frac{1}{0.2933\ \mathrm{ns}}=1.111\times10^{9}+3.410\times10^{9}=4.52\times10^{9}\ \mathrm{rad/s}\ (719.5\ \mathrm{MHz}).
$$

### Step 4 — (b) SPICE comparison

The deck is the linear hybrid-π circuit with the values of Step 1. A pole-zero analysis gives the exact roots, and the ac sweep gives the −3-dB frequency.

```spice
* grsim-07-44 CE stage, linear hybrid-pi model
Vs s 0 dc 0 ac 1
RS s b1 5k
rb b1 b 300
rpi b 0 10400
Cpi b 0 5.82134e-12
Cmu b o 0.3p
Gm o 0 b 0 0.0192308
RL o 0 3k
.ac dec 100 10k 100G
.pz s 0 o 0 vol pz
.end
```

| Quantity | Estimate | ngspice | Difference |
|---|---|---|---|
| Low-frequency gain | −38.2 (31.6 dB) | 31.64 dB | — |
| Dominant pole $p_1$ | 1.914 MHz | $1.2058\times10^{7}$ rad/s = 1.919 MHz | −0.3 % |
| −3-dB frequency | — | 1.915 MHz | — |
| Nondominant pole $p_2$ | 719.5 MHz | $4.5087\times10^{9}$ rad/s = 717.6 MHz | +0.3 % |
| Zero | $g_m/C_\mu$ = 10.2 GHz (right half-plane) | $6.41\times10^{10}$ rad/s = 10.2 GHz | — |

Both estimates are within 0.3 % of the exact poles. They are this accurate because the poles are separated by a factor of about 370: $T_0$ equals $1/|p_1|+1/|p_2|$ exactly, and the short-circuit sum equals $|p_1|+|p_2|$ exactly, so each estimate is off only by the small contribution of the other pole. The right-half-plane zero from the feedforward current through $C_\mu$ lies far above both poles.
