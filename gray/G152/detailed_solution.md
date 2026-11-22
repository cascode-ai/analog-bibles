# Detailed solution - G152

Once $M_3$ opens, the op-amp inverting input (the summing node) is connected only to capacitor plates and the op-amp input, so its total charge is conserved from $\phi_1$ to $\phi_2$. Compute that charge at the end of $\phi_1$ and during $\phi_2$, with the summing node at $V_i=-V_o/a$ because of the finite gain, and equate.

### Step 1 — Charge at the end of $\phi_1$

During $\phi_1$, $M_1$ connects the left plate of $C_1$ to $V_S$, $M_3$ grounds the summing node, and the modified $M_4$ connects the right plate of $C_2$ to $V_S$. The charge on the summing-node plates of $C_1$, $C_2$ and $C_P$ is, with each term equal to $C\times$ the summing-node voltage minus the other-plate voltage,

$$
Q_1=(0-V_S)C_1+(0-V_S)C_2+(0)C_P=-V_S\left(C_1+C_2\right).
$$

### Step 2 — Charge during $\phi_2$

During $\phi_2$, $M_2$ grounds the left plate of $C_1$ and $M_5$ connects the right plate of $C_2$ to $V_o$. With finite gain, $V_o=a(V_+-V_-)=-aV_i$, so the summing node sits at $V_i=-V_o/a$:

$$
Q_2=\left(-\frac{V_o}{a}\right)C_1+\left(-\frac{V_o}{a}\right)C_P+\left(-\frac{V_o}{a}-V_o\right)C_2 .
$$

### Step 3 — Charge conservation

Setting $Q_2=Q_1$:

$$
V_S\left(C_1+C_2\right)=V_o\left[C_2+\frac{C_1+C_2+C_P}{a}\right]
\ \Rightarrow\
V_o=V_S\,\frac{C_1+C_2}{C_2}\cdot\frac{1}{1+\dfrac{C_1+C_2+C_P}{aC_2}}.
$$

As $a\to\infty$, $V_o\to V_S(1+C_1/C_2)$, a positive gain; the fractional gain error is about $(C_1+C_2+C_P)/(aC_2)$, so $C_P$ affects only the finite-gain error, not the ideal gain. Compared with the original circuit, where $M_4$ grounds $C_2$ and the gain is $C_1/C_2$, the charge $V_SC_2$ stored on $C_2$ during $\phi_1$ adds one more unit of $V_S$ to the output.
