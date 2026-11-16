# Detailed solution - R448

**Approach.** Break the CMFB loop at the gate of the tail transistor $M_T$, apply a test voltage $v_E$ there, and follow the signal around the loop. $v_E$ changes the tail current by $g_{mT}v_E$, which splits equally between $M_1$ and $M_2$. Each half of that current is subtracted at a folding node, so the current delivered to each output changes by $g_{mT}v_E/2$. The common-mode output resistance turns this into a common-mode output voltage, which the divider senses and the error amplifier returns to $V_E$. A common-mode half circuit is used throughout.

### Step 1 — The loop and its polarity

Reading the figure: the op amp is a folded cascode. The input pair $M_1$–$M_2$ has its tail transistor $M_T$ (source grounded, gate driven by the error amplifier). The drains of $M_1$ and $M_2$ connect to the folding nodes, which are the drains of the top PMOS current sources (output resistance $r_{OP}$) and the sources of the PMOS cascodes $M_5$, $M_6$. Below the outputs are NMOS cascode devices and NMOS current sources ($r_{ONS}$). $R_1$, $R_2$ produce $V_{out,CM}$ at their centre tap; it drives the "+" input of the error amplifier, and $V_{REF}$ drives the "−" input.

**Polarity.** Suppose $V_{out,CM}$ rises. Then $V_E$ rises, so $M_T$ conducts more and $M_1$, $M_2$ each pull more current out of their folding nodes. The top PMOS sources supply a fixed current, so *less* current flows down through $M_5$, $M_6$ into the outputs, while the bottom NMOS sources still sink a fixed current. The outputs therefore fall: **negative feedback**. We compute the loop-gain magnitude $T$.

**Breaking the loop.** Drive the gate of $M_T$ with a test voltage $v_E$ (the gate draws no current, so nothing is loaded), hold the differential input at zero, and treat $V_{REF}$ as AC ground.

### Step 2 — Common-mode half circuit

$v_E$ acts identically on both halves, so $v_{out1} = v_{out2} = v_{out,CM}$, and we may split the circuit into two identical halves:

- **Tail.** $M_T$ is shared, so each half gets half of its current, $g_{mT}v_E/2$, and twice its output resistance, $2r_{OT}$.
- **$R_1$, $R_2$.** Both ends move together and the tap feeds only a gate, so no current flows in the divider. It does not load the outputs, and it senses $v_{out,CM}$ exactly.

Nodes of the half circuit: E, P (tail node), F (folding node), out, B (drain of the bottom NMOS current source = source of the NMOS cascode), and AC ground.

- Tail half: current $(g_{mT}/2)v_E$ from P to ground, in parallel with $2r_{OT}$.
- $M_1$ (gate at AC ground): current $(g_{m1} + g_{mb1})(-v_P)$ from F to P, with $r_{O1}$ between F and P.
- Top PMOS source: $r_{OP}$ from F to AC ground.
- PMOS cascode $M_5$: current $(g_{m5} + g_{mb5})v_F$ from F to out, with $r_{O5}$ between F and out.
- NMOS cascode: current $(g_{mNC} + g_{mbNC})(-v_B)$ from out to B, with $r_{ONC}$ between out and B.
- Bottom NMOS current source: $r_{ONS}$ from B to ground.

<!-- diagram: diagram-01.cir -->

### Step 3 — How much current reaches each output (short-circuit transconductance)

Short the output to AC ground and find the change in the current delivered to it.

**Tail to $M_1$.** With the output shorted, F is a low-impedance node (it looks into the source of $M_5$), so $v_F \approx 0$. KCL at P (the current coming down through $M_1$ equals the current leaving through the tail half):

$$
\begin{aligned}
-(g_{m1} + g_{mb1} + 1/r_{O1})\,v_P &= \frac{g_{mT}}{2}v_E + \frac{v_P}{2r_{OT}}\\
v_P &= -\frac{(g_{mT}/2)\,v_E}{g_{m1} + g_{mb1} + 1/r_{O1} + 1/(2r_{OT})}\\
i_1 &= -(g_{m1} + g_{mb1} + 1/r_{O1})\,v_P \approx \frac{g_{mT}}{2}v_E .
\end{aligned}
$$

Because the source of $M_1$ presents only about $1/g_{m1}$, far less than $2r_{OT}$, essentially all of the tail-current change flows through $M_1$.

**$M_1$ to the output.** $i_1$ is pulled *out of* F. KCL at F, with $r_{OP}$ supplying $-v_F/r_{OP}$ and $M_5$ carrying $(g_{m5} + g_{mb5} + 1/r_{O5})v_F$ toward the shorted output:

$$
\begin{aligned}
-\frac{v_F}{r_{OP}} &= i_1 + (g_{m5} + g_{mb5} + 1/r_{O5})\,v_F\\
v_F &= -\frac{i_1}{g_{m5} + g_{mb5} + 1/r_{O5} + 1/r_{OP}}\\
i_5 &= (g_{m5} + g_{mb5} + 1/r_{O5})\,v_F \approx -i_1 .
\end{aligned}
$$

The source of $M_5$ ($\approx 1/(g_{m5} + g_{mb5})$) is far lower than $r_{OP}$, so nearly all of $i_1$ is taken from the current flowing through $M_5$ into the output. Hence

$$G_{m,CM} \approx \frac{g_{mT}}{2}, \qquad \text{current into each output} = -\frac{g_{mT}}{2}v_E .$$

### Step 4 — Common-mode output resistance per side

**Looking down** (NMOS cascode over the bottom current source; same derivation as for any cascode, with a test current $i_t$ flowing through $r_{ONS}$ so that $v_B = i_tr_{ONS}$):

$$
\begin{aligned}
i_t &= (g_{mNC} + g_{mbNC})(-v_B) + \frac{v_t - v_B}{r_{ONC}}\\
v_t &= i_t\left[(g_{mNC} + g_{mbNC})r_{ONC}r_{ONS} + r_{ONC} + r_{ONS}\right],\\
R_{down} &\approx (g_{mNC} + g_{mbNC})r_{ONC}r_{ONS} .
\end{aligned}
$$

**Looking up** (PMOS cascode $M_5$ degenerated by the resistance at F, $R_F$):

$$R_{up} = (g_{m5} + g_{mb5})r_{O5}R_F + r_{O5} + R_F \approx (g_{m5} + g_{mb5})r_{O5}R_F .$$

**What loads F for a common-mode change?** F sees $r_{OP}$ and the drain of $M_1$. In the common-mode half circuit, $M_1$ is degenerated by $2r_{OT}$, so the resistance looking into its drain is

$$R_{M1,CM} \approx (g_{m1} + g_{mb1})r_{O1}(2r_{OT}) \approx 2g_{m1}r_{O1}r_{OT},$$

which is enormous (infinite for an ideal tail). Hence $R_F \approx r_{OP}$ and

$$R_{out,CM} = R_{up}\parallel R_{down} \approx \left[(g_{m5} + g_{mb5})r_{O5}r_{OP}\right]\parallel\left[(g_{mNC} + g_{mbNC})r_{ONC}r_{ONS}\right].$$

(Writing $r_{OP}\parallel r_{O1}$ for $R_F$, which is the differential-mode value, is a common, slightly conservative approximation.)

### Step 5 — From $v_E$ to $v_{out,CM}$ and back

The output change is the current into the output times $R_{out,CM}$:

$$v_{out,CM} = -\frac{g_{mT}}{2}R_{out,CM}\,v_E .$$

The error amplifier (a differential pair with a current-mirror load) has the standard gain $A_E = g_{mE}(r_{OE1}\parallel r_{OE3})$: its mirror combines both halves' signal currents into a short-circuit output current $g_{mE}v_{id}$, and its output node sees $r_{OE1}\parallel r_{OE3}$. With $v_{out,CM}$ on the "+" input and $V_{REF}$ at AC ground:

$$v_E' = A_E\,v_{out,CM} = -A_E\,\frac{g_{mT}}{2}R_{out,CM}\,v_E .$$

### Step 6 — Loop gain

$$\frac{v_E'}{v_E} = -g_{mE}(r_{OE1}\parallel r_{OE3})\cdot\frac{g_{mT}}{2}\cdot R_{out,CM} .$$

The minus sign confirms negative feedback, and

$$T = g_{mE}(r_{OE1}\parallel r_{OE3})\cdot\frac{g_{mT}}{2}\cdot R_{out,CM}.$$

**Comparison with controlling the bottom current sources.** If $V_E$ drove the bottom NMOS sources (as in the related circuit with $M_3$/$M_4$), each output would receive the full $g_{m3}v_E$. Here the tail current is shared by two halves, so each output receives only half of $g_{mT}v_E$: hence the factor $1/2$.

### Result

$$T \approx g_{mE}(r_{OE1}\parallel r_{OE3})\cdot\frac{g_{mT}}{2}\cdot R_{out,CM},$$

$$R_{out,CM} = \left[(g_{m5} + g_{mb5})r_{O5}r_{OP}\right]\parallel\left[(g_{mNC} + g_{mbNC})r_{ONC}r_{ONS}\right],$$

with negative feedback ($V_{out,CM}\uparrow \Rightarrow$ tail current $\uparrow \Rightarrow$ less current into the outputs $\Rightarrow$ outputs $\downarrow$). For a common-mode change the drain of $M_1$ looks like $\approx 2g_{m1}r_{O1}r_{OT}$ (infinite with an ideal tail), so $r_{O1}$ does not load the folding node; $r_{OP}\parallel r_{O1}$ is an acceptable approximation. $R_1$ and $R_2$ carry no common-mode current.

**Common mistake.** Using $g_{mT}$ per side instead of $g_{mT}/2$. The tail current change is shared equally by $M_1$ and $M_2$, so each folding node, and each output, receives only half of it.

**Common mistake.** Arguing that "a differential pair rejects common-mode signals, so the tail current cannot affect the output CM level". A change in the tail current is not a common-mode *input voltage*; it directly changes both drain currents and therefore the currents folded into the outputs. That is exactly how this CMFB works.

**Common mistake.** Letting $R_1$, $R_2$ load the outputs in the CM loop. For a common-mode change both ends of the divider move together, so no current flows through it.
