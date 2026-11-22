# Detailed solution - G140

At $V_o=0$ the diodes $Q_5$, $Q_6$ bias the npn follower $Q_2$ and the composite pnp $Q_3$–$Q_4$ slightly on. Three relations fix the currents: KVL around the loop from the base of $Q_2$ to the base of $Q_3$, KCL at the output (no load current at $V_o=0$), and KCL at the base of $Q_2$ (the current of $Q_7$ splits between the base of $Q_2$ and the diodes). Use $|I_C|=I_S\exp(|V_{BE}|/V_T)$ with $I_{Sn}=10^{-14}$ A and $I_{Sp}=10^{-15}$ A.

### Step 1 — Loop equation

The two diodes span the base of $Q_2$ to the base of $Q_3$, and so do the junctions $V_{BE2}$ (to the output) and $|V_{BE3}|$ (from the output down to the base of $Q_3$):

$$
V_{BE6}+V_{BE5}=V_{BE2}+|V_{BE3}|\ \Rightarrow\ \left(\frac{I_D}{I_{Sn}}\right)^2=\frac{I_{C2}}{I_{Sn}}\cdot\frac{|I_{C3}|}{I_{Sp}}
\ \Rightarrow\ I_{C2}|I_{C3}|=I_D^2\frac{I_{Sp}}{I_{Sn}}=\frac{I_D^2}{10}.
$$

### Step 2 — Composite pnp and output KCL

In the composite device the collector current of $Q_3$ is the base current of $Q_4$, so $I_{C4}=\beta_{Fn}|I_{C3}|=150|I_{C3}|$. With no load current, the emitter current of $Q_2$ equals the current entering the composite at the output, $|I_{E3}|+I_{C4}$:

$$
I_{C2}\frac{151}{150}=|I_{C3}|\left(\frac{31}{30}+150\right)\ \Rightarrow\ |I_{C3}|=\frac{I_{C2}}{150.03}\approx\frac{I_{C2}}{150}.
$$

The composite behaves like a pnp with current gain about $\beta_p\beta_n$ but with the $I_S$ of $Q_3$; that is why its current, $I_{C4}$, comes out equal to $I_{C2}$ while $Q_3$ carries only 1/150 of it.

### Step 3 — Solve with the base current of $Q_2$

Substituting $|I_{C3}|=I_{C2}/150$ into the loop equation:

$$
\frac{I_{C2}^2}{150}=\frac{I_D^2}{10}\ \Rightarrow\ I_{C2}=\sqrt{15}\,I_D=3.873\,I_D .
$$

$Q_7$'s 0.15 mA supplies the base of $Q_2$ and the diodes, $I_D=0.15\ \mathrm{mA}-I_{C2}/150$. Hence

$$
I_D=\frac{0.15\ \mathrm{mA}}{1+3.873/150}=0.1462\ \mathrm{mA},\qquad I_{C2}=3.873(0.1462\ \mathrm{mA})=0.566\ \mathrm{mA},
$$
$$
|I_{C3}|=\frac{0.566\ \mathrm{mA}}{150}=3.78\ \mu\mathrm A,\qquad I_{C4}=150|I_{C3}|=0.566\ \mathrm{mA}.
$$

Check: $V_{BE2}=0.644$ V, $|V_{BE3}|=0.573$ V, sum 1.217 V $=2V_D=2(0.609\ \mathrm V)$.

### Step 4 — $Q_1$ and summary

$Q_1$ sinks the diode current plus the base current of $Q_3$, $3.78\ \mu\mathrm A/30=0.13\ \mu$A:

$$
I_{C1}=0.1462\ \mathrm{mA}+0.13\ \mu\mathrm A\approx0.146\ \mathrm{mA}.
$$

| Device | Quiescent current |
|---|---|
| $Q_7$ | 0.15 mA |
| $Q_5$, $Q_6$ | 0.146 mA |
| $Q_2$ | 0.566 mA |
| $Q_3$ | 3.78 µA |
| $Q_4$ | 0.566 mA |
| $Q_1$ | 0.146 mA |

The output devices idle at about 3.9 times the diode current: the smaller $I_S$ of the pnp $Q_3$ is offset by the current gain of $Q_4$, so the composite needs only a small $|V_{BE3}|$.
