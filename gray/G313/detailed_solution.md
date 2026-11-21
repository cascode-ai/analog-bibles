# Detailed solution - G313

With a resistor $R_Z$ in series with $C_c$, the zero of a Miller-compensated two-stage amplifier is at $1/[C_c(1/g_{m6}-R_Z)]$, which moves to infinity when $R_Z=1/g_{m6}$. $M_9$ supplies $R_Z$ as a triode device. The bias circuit is a replica that fixes the gate drive of $M_9$, so the required $W/L$ follows from comparing the triode conductance of $M_9$ with $g_{m6}$.

### Step 1 — Condition for a zero at infinity

Writing the current through the series $R_Z$–$C_c$ branch, the output node sees a feedforward current $v_1/(R_Z+1/sC_c)$ that opposes $g_{m6}v_1$. The zero is where they cancel:
$$
g_{m6}v_1=\frac{v_1}{R_Z+1/(sC_c)}\quad\Rightarrow\quad z=\frac{1}{C_c\,(1/g_{m6}-R_Z)} .
$$
So $R_Z=1/g_{m6}$ puts the zero at infinity.

### Step 2 — Bias and $g_{m6}$

All drawn lengths are 1 μm. For saturated devices, $L_{\text{eff}}=1-2(0.09)-0.1=0.72$ μm, so $M_6$ (100/1) has $W/L_{\text{eff}}=138.9$. $M_6$ carries 200 μA: it is twice the size of $M_4$, which carries half of the 200-μA tail current, and $V_{GS6}=V_{GS4}$ at balance. With $I_D=\frac{k'_n}{2}\frac{W}{L_{\text{eff}}}V_{ov}^2$:
$$
V_{ov6}=\sqrt{\frac{2I_{D6}}{k'_n(W/L_{\text{eff}})_6}}=\sqrt{\frac{2(200\ \mu\mathrm A)}{(194\ \mu\mathrm{A/V^2})(138.9)}}=0.122\ \mathrm V,
$$
$$
g_{m6}=k'_n\left(\frac{W}{L_{\text{eff}}}\right)_6V_{ov6}=\frac{2I_{D6}}{V_{ov6}}=3.28\ \mathrm{mA/V},\qquad \frac1{g_{m6}}=304\ \Omega .
$$

### Step 3 — Gate drive of $M_9$ from the replica bias

In [Fig. 2] with the new values:

- $M_{10}$ has the same width as $M_8$ and the same $V_{GS}$, so it mirrors $I_s=200$ μA into $M_{11}$ and $M_{12}$.
- $M_{12}$ (100/1, diode-connected) carries 200 μA, the same size and current as $M_6$, so $V_{GS12}=V_{GS6}$. The source of $M_{11}$ therefore sits at the gate voltage of $M_6$.
- In [Fig. 1], $M_9$ has its source on the gate node of $M_6$ (the first-stage output), and its gate is driven by the gate of $M_{11}$.

Hence $M_9$ and $M_{11}$ have the same gate voltage and the same source voltage, so $V_{GS9}=V_{GS11}$. Their bodies are both at $-1.5$ V, so their source–body voltages and their threshold voltages are equal, and the body effect cancels. $M_{11}$ is diode-connected and saturated, with the same size and current as $M_6$:
$$
V_{GS9}-V_{t9}=V_{ov11}=V_{ov6}=0.122\ \mathrm V .
$$

### Step 4 — Triode resistance of $M_9$

No dc current flows through $C_c$, so $V_{DS9}=0$ and $M_9$ is deep in the triode region. Its small-signal resistance is the inverse of
$$
\frac{\partial I_D}{\partial V_{DS}}\Big|_{V_{DS}=0}=k'_n\left(\frac{W}{L_{\text{eff}}}\right)_9(V_{GS9}-V_{t9}),
\qquad
R_Z=\frac{1}{k'_n(W/L_{\text{eff}})_9\,V_{ov6}} .
$$
Setting $R_Z=1/g_{m6}=1/[k'_n(W/L_{\text{eff}})_6V_{ov6}]$, the common factors cancel:
$$
\left(\frac{W}{L_{\text{eff}}}\right)_9=\left(\frac{W}{L_{\text{eff}}}\right)_6=138.9 .
$$
The match holds for any bias current and process spread, because $V_{ov}$ and $k'_n$ appear identically in $R_Z$ and $1/g_{m6}$.

### Step 5 — Drawn size

In the triode region with $V_{DS}\approx0$ there is no pinch-off region, so $L_{\text{eff}}=1-2(0.09)=0.82$ μm. With a 1-μm drawn length,
$$
W_9=138.9\times0.82\ \mu\mathrm m=114\ \mu\mathrm m,\qquad \left(\frac WL\right)_{9,\text{drawn}}=\frac{114}{1},
$$
which gives $R_Z=304\ \Omega$. If $X_d$ were also subtracted for $M_9$, its $L_{\text{eff}}$ would be 0.72 μm and $W_9=100$ μm, an exact copy of $M_6$.
