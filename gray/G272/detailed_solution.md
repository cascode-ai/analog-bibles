# Detailed solution - G272

Blackman's formula, $R_{out}=R_{out}(k{=}0)\,[1+\mathcal R(\text{short})]/[1+\mathcal R(\text{open})]$, holds exactly for any controlled source $k$ in the circuit. Evaluate it twice, with $k=g_{m2}$ and with $k=a$, on the same small-signal circuit, and compare the pieces.

### Step 1 — Small-signal circuit

The gate of $M_1$ is held at ac ground by the $M_3$–$R$ bias branch, so $M_1$ is just the resistance $r_{o1}$ from node $S$ (source of $M_2$) to ground and $g_{m1}$ does not appear. The op amp senses $v_S$ at its inverting input against the fixed $V_{BIAS}$, so it drives the gate of $M_2$ to $v_G=-a\,v_S$, giving $v_{gs2}=-(1+a)v_S$. $M_2$ is $g_{m2}v_{gs2}$ (drain to source) in parallel with $r_{o2}$. Let $r_p=r_{o1}\parallel r_{o2}$.

### Step 2 — Reference $k=g_{m2}$

- $g_{m2}=0$: $M_2$ is only $r_{o2}$, so $R_{out}(g_{m2}{=}0)=r_{o1}+r_{o2}$.
- Port shorted: a test current $i_t$ in place of $g_{m2}v_{gs2}$ flows into node $S$, so $v_S=i_tr_p$ and the returned current is $g_{m2}v_{gs2}=-(1+a)g_{m2}r_p\,i_t$: $\mathcal R(\text{short})=(1+a)g_{m2}r_p$.
- Port open: $i_t$ circulates through $r_{o2}$, no current reaches $r_{o1}$, $v_S=0$: $\mathcal R(\text{open})=0$.

$$
R_{out}=(r_{o1}+r_{o2})\left[1+(1+a)g_{m2}r_p\right]=r_{o1}+r_{o2}+(1+a)g_{m2}r_{o1}r_{o2}.
$$

### Step 3 — Reference $k=a$

- $a=0$: the gate of $M_2$ is grounded, an ordinary cascode: $R_{out}(a{=}0)=r_{o1}+r_{o2}+g_{m2}r_{o1}r_{o2}=(r_{o1}+r_{o2})(1+g_{m2}r_p)$.
- Port shorted: a test voltage $v_t$ at the gate makes $M_2$ a source follower into $r_p$, $v_S=v_t\,g_{m2}r_p/(1+g_{m2}r_p)$, and the return is $-a\,v_S$: $\mathcal R(\text{short})=a\,g_{m2}r_p/(1+g_{m2}r_p)\approx a$.
- Port open: $M_2$ cannot carry current, $v_S=0$: $\mathcal R(\text{open})=0$.

$$
R_{out}=(r_{o1}+r_{o2})(1+g_{m2}r_p)\left[1+\frac{a\,g_{m2}r_p}{1+g_{m2}r_p}\right]=(r_{o1}+r_{o2})\left[1+(1+a)g_{m2}r_p\right].
$$

### Step 4 — Comparison

| Quantity | $k=g_{m2}$ | $k=a$ |
|---|---|---|
| $R_{out}(k{=}0)$ | $r_{o1}+r_{o2}$ | $r_{o1}+r_{o2}+g_{m2}r_{o1}r_{o2}$ |
| $\mathcal R(\text{short})$ | $(1+a)g_{m2}r_p$ | $a\,g_{m2}r_p/(1+g_{m2}r_p)\approx a$ |
| $\mathcal R(\text{open})$ | 0 | 0 |
| $R_{out}$ | $r_{o1}+r_{o2}+(1+a)g_{m2}r_{o1}r_{o2}$ | same |

Both choices give the identical exact result

$$
R_{out}=r_{o1}+r_{o2}+(1+a)\,g_{m2}r_{o1}r_{o2}\approx a\,g_{m2}r_{o1}r_{o2}.
$$

What differs is how the result is split. With $k=g_{m2}$ the "open-loop" resistance is the small $r_{o1}+r_{o2}$, and one large return ratio contains both the local cascode feedback of $M_2$ and the op-amp loop. With $k=a$ the plain cascode, including $M_2$'s local feedback, is already in $R_{out}(a{=}0)$, and the return ratio $\approx a$ describes only the op-amp loop: the active cascode is about $a$ times a plain cascode. Return ratios depend on the reference element, but the impedance, a property of the circuit, does not. In both cases $\mathcal R(\text{open})=0$, so the feedback only raises the resistance. Because $g_{m1}=g_{m2}$ here, $g_{m1}$ could equally be written in the result.
