# Detailed solution - A257

Write a single KCL equation at the output node, with the ideal buffer output fixed at $-AV_i$, collect the terms in $V_{out}$, and factor numerator and denominator into the requested pole–zero form.

### Step 1 — Node equation at the output

The buffer has zero output impedance, so the left plate of $C_c$ is at $-AV_i$. Currents into the output node equal currents out of it:

- in through $C_c$: $sC_c(-AV_i-V_{out})$;
- out through the second-stage source, as drawn: $g_{mII}V_i$;
- out through $R_{II}$ and $C_{II}$: $V_{out}(1/R_{II}+sC_{II})$.

$$
sC_c(-AV_i-V_{out})=g_{mII}V_i+V_{out}\Big(sC_{II}+\frac{1}{R_{II}}\Big).
$$

### Step 2 — Transfer function

Collecting terms,

$$
V_{out}\Big[s(C_c+C_{II})+\frac1{R_{II}}\Big]=-V_i\,(sAC_c+g_{mII}),
$$

$$
\frac{V_{out}}{V_i}=-\frac{sAC_c+g_{mII}}{s(C_c+C_{II})+1/R_{II}} .
$$

Factoring $AC_c$ from the numerator and $C_c+C_{II}$ from the denominator:

$$
\frac{V_{out}(s)}{V_i(s)}=\frac{-AC_c}{C_c+C_{II}}\left(\frac{s+g_{mII}/AC_c}{s+1/[R_{II}(C_c+C_{II})]}\right).
$$

### Step 3 — Zero and pole

$$
z=-\frac{g_{mII}}{AC_c}\ \ \text{(left half-plane)},\qquad
p=-\frac{1}{R_{II}(C_c+C_{II})}.
$$

The zero is in the left half-plane because the buffer inverts: the feedforward current through $C_c$, $-sAC_cV_i$, has the same sign as the second-stage current $-g_{mII}V_i$ delivered to the output, so the two paths add instead of cancelling. (Without the inversion, they would cancel at a positive $s$, giving the familiar RHP zero.)

As checks, the dc gain is $-g_{mII}R_{II}$ and the high-frequency gain is $-AC_c/(C_c+C_{II})$, set by the capacitive divider.
