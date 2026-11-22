# Detailed solution - G159

Find the dc output with zero differential input. Perfect matching forces the drain of $M_4$ to the same voltage as the diode $M_3$, so the gate of $M_6$ sits at $V_{DD}-|V_{GS3}|$; the aspect-ratio condition then makes $M_6$ a replica of $M_3$, which fixes the output. The offset is the input needed to move this output to the midpoint of the supplies, i.e. the output error divided by the gain. As the requested form implies, $M_5$ and $M_7$ are treated as ideal current sources, while the finite $r_o$ of the p-channel devices sets the output voltage and the gain.

### Step 1 — First-stage output at zero input

With $v_i=0$, the pair splits the tail current equally, $I_{D1}=I_{D2}=I_{D5}/2$, and the mirror gives $|I_{D3}|=|I_{D4}|=I_{D5}/2$. $M_3$ and $M_4$ have the same gate-source voltage; with channel-length modulation, $|I_{D4}|=|I_{D3}|$ only if $V_{SD4}=V_{SD3}=|V_{GS3}|$. So the first-stage output, which is the gate of $M_6$, is at $V_{DD}-|V_{GS3}|$, and

$$
|V_{GS6}|=|V_{GS3}|=|V_{t3}|+|V_{ov3}|.
$$

### Step 2 — Second-stage current and output voltage

$M_5$ and $M_7$ share the gate voltage of $M_8$, so $I_{D7}=I_{D5}(W/L)_7/(W/L)_5$. The given condition, $(W/L)_3/(W/L)_6=\tfrac12(W/L)_5/(W/L)_7$, rearranges to

$$
\frac{|I_{D3}|}{(W/L)_3}=\frac{I_{D5}/2}{(W/L)_3}=\frac{I_{D5}(W/L)_7/(W/L)_5}{(W/L)_6}=\frac{I_{D7}}{(W/L)_6}.
$$

$M_3$ and $M_6$ therefore have equal current densities. With equal $|V_{GS}|$, $M_6$ carries exactly the current $I_{D7}$ supplied by $M_7$ only if the source-drain voltage of $M_6$ also equals that of $M_3$:

$$
V_{SD6}=V_{SD3}=|V_{t3}|+|V_{ov3}|\ \Rightarrow\ V_O=V_{DD}-|V_{t3}|-|V_{ov3}|.
$$

### Step 3 — Systematic input offset

The midpoint of the supplies is $(V_{DD}-V_{SS})/2$. Moving the output from $V_O$ to the midpoint requires a differential input $\Delta V_o/A_v$, where $A_v=-g_{m1}(r_{o2}\parallel r_{o4})g_{m6}(r_{o6}\parallel r_{o7})$ is the (negative) op-amp gain with $v_i=v_{G1}-v_{G2}$:

$$
V_{OS(sys)}=\frac{\dfrac{V_{DD}-V_{SS}}{2}-\left(V_{DD}-|V_{t3}|-|V_{ov3}|\right)}{A_v}=\frac{\dfrac{V_{DD}+V_{SS}}{2}-|V_{t3}|-|V_{ov3}|}{|A_v|}.
$$

It vanishes only if $|V_{GS3}|=(V_{DD}+V_{SS})/2$. In the usual case $|V_{GS3}|<(V_{DD}+V_{SS})/2$ the output sits above the midpoint, and because $A_v<0$ a positive $v_{G1}-v_{G2}$ is needed to pull it down. The offset is small, the output error divided by a gain of order $(g_mr_o)^2$.

### Step 4 — Model premise

The result rests on the approximation stated at the start. If channel-length modulation is neglected in every device, the currents balance at $v_i=0$ for any output that keeps $M_6$ and $M_7$ saturated: the output is undetermined, the gain infinite and the offset zero. If $\lambda$ is kept in $M_5$ and $M_7$ as well, the balance $|I_{D6}|=I_{D7}$ also involves the tail-node voltage, so $V_O$ moves with the input common-mode level and the offset can no longer be written in the requested variables alone.
