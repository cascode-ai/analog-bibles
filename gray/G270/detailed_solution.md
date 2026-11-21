# Detailed solution - G270

Apply Blackman's formula with the controlled source $g_{m2}v_{gs2}$ of $M_2$ as the reference element:

$$
R_{out}=R_{out}(g_{m2}{=}0)\,\frac{1+\mathcal R(\text{port shorted})}{1+\mathcal R(\text{port open})}.
$$

### Step 1 — Small-signal circuit

The gate of $M_1$ is tied to the diode-connected $M_3$; $M_3$ is biased by $R$ from a fixed supply and carries no signal, so the gate of $M_1$ is at ac ground and $M_1$ appears only as its output resistance $r_{o1}$ from node $S$ (source of $M_2$) to ground; its $g_{m1}$ does not enter. The op amp compares $v_S$ with the fixed $V_{BIAS}$ at its non-inverting input, so the gate of $M_2$ is driven to $v_G=-a\,v_S$, and

$$
v_{gs2}=v_G-v_S=-(1+a)\,v_S .
$$

$M_2$ consists of the controlled source $g_{m2}v_{gs2}$ (drain to source) in parallel with $r_{o2}$.

### Step 2 — Resistance with the reference source killed

With $g_{m2}=0$, $M_2$ is just $r_{o2}$, in series with $r_{o1}$ to ground:

$$
R_{out}(g_{m2}{=}0)=r_{o1}+r_{o2}.
$$

### Step 3 — Return ratio with the output port shorted

Replace $g_{m2}v_{gs2}$ by an independent test current $i_t$ from drain to source. With the drain shorted to ground, $i_t$ is injected into node $S$, which sees $r_{o1}$ and $r_{o2}$ in parallel to ground:

$$
v_S=i_t\,(r_{o1}\parallel r_{o2}),\qquad
g_{m2}v_{gs2}=-(1+a)\,g_{m2}(r_{o1}\parallel r_{o2})\,i_t ,
$$

$$
\mathcal R(\text{short})=-\frac{g_{m2}v_{gs2}}{i_t}=(1+a)\,g_{m2}(r_{o1}\parallel r_{o2}).
$$

### Step 4 — Return ratio with the output port open

With the drain open, $i_t$ leaving the drain node must return through $r_{o2}$ to the source node, so no net current enters $r_{o1}$: $v_S=0$, the op amp output and $v_{gs2}$ are zero, and

$$
\mathcal R(\text{open})=0 .
$$

### Step 5 — Output resistance

$$
R_{out}=(r_{o1}+r_{o2})\left[1+(1+a)\,g_{m2}(r_{o1}\parallel r_{o2})\right]=r_{o1}+r_{o2}+(1+a)\,g_{m2}r_{o1}r_{o2}\approx a\,g_{m2}r_{o1}r_{o2},
$$

using $(r_{o1}+r_{o2})(r_{o1}\parallel r_{o2})=r_{o1}r_{o2}$. The op amp multiplies the output resistance of an ordinary cascode, $r_{o1}+r_{o2}+g_{m2}r_{o1}r_{o2}$, by about $1+a$. Because $M_1$ and $M_2$ carry the same current with equal $W/L$ and $\gamma=0$, $g_{m1}=g_{m2}$, so the result may also be written with $g_{m1}$; physically the factor comes from $M_2$.
