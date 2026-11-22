# Detailed solution - grsim-08-33

With $V_i=0$, the loop consists of the op-amp's controlled source $a_v(v_+-v_-)=-a_vv_-$ (the noninverting input is grounded), its output resistance $R_o$, the feedback resistor $R_2$, and the inverting-input node, which is loaded by $R_1$ in parallel with the op-amp input resistance $R_i$. The injection point × lies on the wire between $R_2$ and this node. Each injection ratio follows from one node equation. The return ratio is then obtained from the combination formula, checked by breaking the loop directly at $a_v$, and confirmed with two ngspice ac runs.

### Step 1 — Impedances on each side of the break

Looking from × toward the op-amp input ($d$ side), the node $v_-$ sees $R_1$ to ground in parallel with $R_i$ to the grounded noninverting input:

$$
Z_d=R_1\parallel R_i=1\ \mathrm{k\Omega}\parallel1\ \mathrm{M\Omega}=999.0\ \Omega .
$$

Looking from × toward the output ($m$ side), the path is $R_2$ in series with $R_o$, ending at the source voltage $-a_vv_-$:

$$
Z_m=R_2+R_o=5.1\ \mathrm{k\Omega}.
$$

### Step 2 — (a) Current injection, $\mathcal{R}'_i$

In [Fig. 2] the × node is the inverting input itself, so $v_-=v_x$. The current flowing left into $Z_d$ is $i_d=v_x/Z_d$. The current arriving from the $R_2$ side is driven by the difference between the source voltage and $v_x$:

$$
i_m=\frac{-a_vv_x-v_x}{Z_m}=-\frac{(1+a_v)v_x}{Z_m}.
$$

Therefore

$$
\mathcal{R}'_i=-\frac{i_m}{i_d}=(1+a_v)\frac{Z_d}{Z_m}=(10\,001)\frac{999.0\ \Omega}{5100\ \Omega}=1959.0 .
$$

### Step 3 — (a) Voltage injection, $\mathcal{R}'_v$

In [Fig. 3] the source $v_t$ separates $v_d$ (input side, so $v_-=v_d$) from $v_m$ ($R_2$ side). No current enters the op-amp output side except through $R_2$, so the current through $R_2$ equals the current into $Z_d$:

$$
\frac{-a_vv_d-v_m}{Z_m}=\frac{v_d}{Z_d}\ \Rightarrow\ v_m=-\left(a_v+\frac{Z_m}{Z_d}\right)v_d,
$$

$$
\mathcal{R}'_v=-\frac{v_m}{v_d}=a_v+\frac{Z_m}{Z_d}=10\,000+\frac{5100}{999.0}=10\,005.1 .
$$

### Step 4 — (a) Combining the two ratios

$$
\frac{1}{1+\mathcal{R}}=\frac{1}{1+1959.0}+\frac{1}{1+10\,005.1}=5.1020\times10^{-4}+0.9994\times10^{-4}=6.1014\times10^{-4},
$$

$$
\mathcal{R}=\frac{1}{6.1014\times10^{-4}}-1=1638.0 .
$$

### Step 5 — (b) Direct return ratio at the controlled source

Replace $a_v(v_+-v_-)$ by an independent test source $s_t$ and compute the returned controlling voltage. $s_t$ drives $R_o+R_2$ into $Z_d$, so $v_-=s_tZ_d/(Z_d+Z_m)$. The returned value of the source is $a_v(0-v_-)$, so

$$
\mathcal{R}=a_v\frac{Z_d}{Z_d+Z_m}=10^4\cdot\frac{999.0\ \Omega}{999.0\ \Omega+5100\ \Omega}=1638.0 .
$$

This agrees with Step 4 to all digits shown: the combination formula is exact for a loop that passes entirely through the injection point. Neither injection alone is accurate here. A voltage injection is accurate only when the side it drives (here $Z_d=999\ \Omega$) has a much higher impedance than the side behind it ($Z_m=5.1$ kΩ); the opposite holds, so $\mathcal{R}'_v$ overestimates $\mathcal{R}$ about sixfold. A current injection is accurate when $Z_d\ll Z_m$; here $\mathcal{R}'_i$ is too high by the factor $(Z_d+Z_m)/Z_m=1.20$.

### Step 6 — (c) SPICE simulation

The op amp is a VCVS of gain $10^4$ controlled by $v_+-v_-$, in series with $R_o$, with $R_i$ between the inputs. A 0-V source in series with $R_2$ measures $i_m$ in the current-injection circuit.

```spice
* Fig. 2: current injection
Ri inp x 1meg
Vinp inp 0 0
Ea a 0 inp x 1e4
Ro a o 100
R2 o m 5k
Vm m x 0
R1 x 0 1k
It 0 x dc 0 ac 1
.ac lin 1 1k 1k
* i_m = i(Vm), i_d = 1 + i_m,  R'_i = -i_m/i_d
.end
```

```spice
* Fig. 3: voltage injection
Ri inp d 1meg
Vinp inp 0 0
Ea a 0 inp d 1e4
Ro a o 100
R2 o m 5k
Vt d m dc 0 ac 1
R1 d 0 1k
.ac lin 1 1k 1k
* R'_v = -v(m)/v(d)
.end
```

| Quantity | Hand | ngspice |
|---|---|---|
| $\mathcal{R}'_i$ | 1959.0 | 1959.02 |
| $\mathcal{R}'_v$ | 10 005.1 | 10 005.11 |
| $\mathcal{R}$ from the combination | 1638.0 | 1637.97 |
| $\mathcal{R}$ direct | 1638.0 | — |

The circuit has no capacitors, so the ratios are real and independent of frequency. The simulated injection ratios, combined with the formula, reproduce the directly computed return ratio. This is how the return ratio of a loop whose controlled sources are hidden inside transistor models can be measured in SPICE.
