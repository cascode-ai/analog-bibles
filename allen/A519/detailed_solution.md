# Detailed solution - A519

First find what one $\phi_1$–$\phi_2$ cycle of the switched-capacitor loop computes, by charge conservation at the op amp's inverting input. It turns out to be the bipolar algorithmic step $V_k=2V_{k-1}\mp V_{REF}$, with the sign set by the comparator. Then iterate from $0.3V_{REF}$ and read the bits at the $\phi_2$ phases.

### Step 1 — Charge balance over one cycle

Call the common node of the $2C$ capacitor and the left capacitor $C$ node T, and the lower plate of that capacitor node D. From [Fig. 1]:

- **$\phi_1$:** node T is grounded; the right plate of $2C$ is connected to the S/H output $V_{SH}$; node D is at $V_{D1}$; the feedback capacitor $C$ is reset.
- **$\phi_2$:** node T is connected to the inverting input (virtual ground); the right plate of $2C$ is grounded; node D is at $V_{D2}$.

Node T is at 0 V in both phases, so the charge on the node-T plates is

$$
q_T(\phi_1)=2C(0-V_{SH})+C(0-V_{D1}),\qquad
q_T(\phi_2)=2C(0-0)+C(0-V_{D2}).
$$

The change $q_T(\phi_2)-q_T(\phi_1)=2CV_{SH}+CV_{D1}-CV_{D2}$ must be removed from the virtual-ground plate of the reset feedback capacitor, whose charge is $C(0-V_{out})$:

$$
-C\,V_{out}=-\left(2CV_{SH}+CV_{D1}-CV_{D2}\right)
\;\Longrightarrow\;
V_{out}=2V_{SH}+V_{D1}-V_{D2}.
$$

### Step 2 — Effect of the comparator decision

The comparator decides on the held value ($V_{OS}=0$): $v_C=1$ if $V_{SH}>0$. The reference switches then give

$$
\begin{aligned}
v_C=1:&\quad \phi_x=\phi_2,\ \phi_y=\phi_1\ \Rightarrow\ V_{D1}=0,\ V_{D2}=V_{REF},\ V_{out}=2V_{SH}-V_{REF};\\
v_C=0:&\quad \phi_x=\phi_1,\ \phi_y=\phi_2\ \Rightarrow\ V_{D1}=V_{REF},\ V_{D2}=0,\ V_{out}=2V_{SH}+V_{REF}.
\end{aligned}
$$

The S/H acquires $V_{out}$ on $\phi_2$, so the loop computes

$$
V_k=2V_{k-1}-b_{k-1}V_{REF},\qquad b_{k-1}=\begin{cases}+1, & V_{k-1}>0\\ -1, & V_{k-1}\le0\end{cases}.
$$

### Step 3 — Residue sequence

Starting from $V_0=v_{in}^*=0.3V_{REF}$, in units of $V_{REF}$:

| $k$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|---|
| $V_k$ | 0.3 | $0.6-1=-0.4$ | $-0.8+1=0.2$ | $0.4-1=-0.6$ | $-1.2+1=-0.2$ | $-0.4+1=0.6$ | $1.2-1=0.2$ | $0.4-1=-0.6$ | $-1.2+1=-0.2$ |
| Decision | 1 | 0 | 1 | 0 | 0 | 1 | 1 | 0 | 0 |

### Step 4 — Output word

The input is loaded during the start-up $\phi_2$, and the bits are taken at the eight following $\phi_2$ phases. If each bit is the comparator decision on the value the S/H has just acquired in that $\phi_2$, the bits are the decisions on $V_1\dots V_8$:

$$
01001100 .
$$

For $0<v_{in}^*<V_{REF}$ these decisions form the ordinary binary code of $v_{in}^*/V_{REF}$: $0.3\times256=76.8$, truncated to $76=01001100_2$.

The timing statement also allows reading each bit as the decision made on the held value during $\phi_1$ and output at the following $\phi_2$. The bits are then the decisions on $V_0\dots V_7$, $10100110$, the offset-binary code whose MSB is the sign of the input: $(0.3+1)/2\times256=166.4\to166=10100110_2$. For a positive input the two words carry the same information, since 10100110 is a 1 followed by the first seven bits of 01001100.
