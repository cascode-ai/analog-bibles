# Detailed solution - G181

Express the transconductance of a MOS pair in terms of its tail current with the square law, write the stage transconductance for the two operating conditions, and equate them. The folded-cascode load sums the signal currents of the two pairs, so the stage transconductance is the sum of the pairs' transconductances.

### Step 1 — Transconductance of one MOS pair

For a pair with tail current $I_T$, each device carries $I_T/2$ in saturation. From $I_D=\tfrac12k'(W/L)V_{ov}^2$, $g_m=\sqrt{2k'(W/L)I_D}$, so

$$
G_m=g_m=\sqrt{2k'(W/L)\frac{I_T}{2}}=\sqrt{k'(W/L)I_T}.
$$

By assumption $k'(W/L)$ is the same for the n-channel pair $M_1$–$M_2$ and the p-channel pair $M_3$–$M_4$; write it $\beta$, and let $I_{B1}=I_{B2}=I_B$.

### Step 2 — Both pairs active

For $V_{B1}\ll V_{IC}\ll V_{DD}-V_{B2}$, each pair has tail current $I_B$:

$$
G_{m,both}=\sqrt{\beta I_B}+\sqrt{\beta I_B}=2\sqrt{\beta I_B}.
$$

### Step 3 — One pair active

Near either rail one pair is off, and the mirror redirects its tail current with gain $R$ to the other pair, whose tail current becomes $I_B+RI_B=(1+R)I_B$:

$$
G_{m,one}=\sqrt{\beta(1+R)I_B}.
$$

### Step 4 — Equal transconductance

Setting $G_{m,one}=G_{m,both}$:

$$
\sqrt{\beta(1+R)I_B}=2\sqrt{\beta I_B}\;\Rightarrow\;1+R=4\;\Rightarrow\;R=3 .
$$

Because $g_m\propto\sqrt I$, doubling the transconductance of the remaining pair needs four times its current: its own $I_B$ plus $3I_B$ redirected from the inactive side. (With a linear $g_m$–$I$ law, as for bipolar devices, $R=1$ would suffice.)
