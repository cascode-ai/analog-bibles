# Detailed solution - A200

With all gates at ac ground, M2 is a common-gate stage: its source is the input node and its drain the output node. M1 loads the input node with $r_{ds1}$ and M3 loads the output with $r_{ds3}$. Write M2's small-signal drain-to-source current once and apply KCL under each termination.

### Step 1 — Current through M2

With its gate at ac ground, source at $v_{in}$ and drain at $v_{out}$, M2 carries the drain-to-source current

$$
i_{ds2}=g_{m2}(0-v_{in})+\frac{v_{out}-v_{in}}{r_{ds2}} .
$$

### Step 2 — Voltage gain (output unloaded)

With $i_{out}=0$ the only other element at the output is M3, whose small-signal current into the output node is $-v_{out}/r_{ds3}$. KCL at the output: that current equals $i_{ds2}$,

$$
-\frac{v_{out}}{r_{ds3}}=-g_{m2}v_{in}+\frac{v_{out}-v_{in}}{r_{ds2}}
\quad\Rightarrow\quad
v_{out}(g_{ds2}+g_{ds3})=v_{in}(g_{m2}+g_{ds2}).
$$

Multiplying numerator and denominator by $r_{ds2}r_{ds3}$:

$$
A_v=\frac{v_{out}}{v_{in}}=\frac{r_{ds3}+g_{m2}r_{ds2}r_{ds3}}{r_{ds2}+r_{ds3}}\approx g_{m2}(r_{ds2}\parallel r_{ds3}),
$$

a large noninverting gain, as expected of a common-gate stage with a current-source load.

### Step 3 — Current gain (output at ac ground)

With $v_{out}=0$, M3's current does not change, so KCL at the output gives the current entering the output terminal as the current M2 carries down from it:

$$
i_{out}=i_{ds2}\big|_{v_{out}=0}=-(g_{m2}+g_{ds2})v_{in}.
$$

At the input node, $i_{in}$ plus the current arriving from M2's source must leave through $r_{ds1}$:

$$
i_{in}+i_{ds2}=g_{ds1}v_{in}
\quad\Rightarrow\quad
i_{in}=(g_{ds1}+g_{m2}+g_{ds2})v_{in}.
$$

Dividing, and multiplying by $r_{ds1}r_{ds2}$:

$$
A_i=\frac{i_{out}}{i_{in}}=-\frac{g_{m2}+g_{ds2}}{g_{m2}+g_{ds1}+g_{ds2}}=-\frac{r_{ds1}(1+g_{m2}r_{ds2})}{r_{ds1}(1+g_{m2}r_{ds2})+r_{ds2}}\approx-1 .
$$

The input current passes through M2 to the output, apart from the small part lost in $r_{ds1}$; it leaves through the output terminal, against the arrow, hence the minus sign. $r_{ds3}$ does not appear because the short takes all of M2's signal current.
