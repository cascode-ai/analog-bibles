# Detailed solution - A520

The switched-capacitor loop of [Fig. 1] doubles the held voltage on each cycle and subtracts or adds $V_{REF}$ according to the comparator. Run that recursion from $0.3V_{REF}$, read the 8-bit word, and convert it back to an analog value with the weighting that matches the bits read.

### Step 1 — Loop recursion

Charge conservation at the op amp's inverting input over one $\phi_1$–$\phi_2$ cycle gives $V_{out}=2V_{SH}+V_{D1}-V_{D2}$, where $V_{D1}$, $V_{D2}$ are the voltages on the lower plate of the reference capacitor $C$ in $\phi_1$ and $\phi_2$. The comparator sets $V_{D2}=V_{REF}$, $V_{D1}=0$ when $V_{SH}>0$ and the reverse otherwise, so the loop computes

$$
V_k=2V_{k-1}-b_{k-1}V_{REF},\qquad b_{k-1}=\begin{cases}+1, & V_{k-1}>0\\ -1, & V_{k-1}\le0\end{cases}.
$$

### Step 2 — Residues and word

From $V_0=0.3V_{REF}$, in units of $V_{REF}$:

| $k$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|---|
| $V_k$ | 0.3 | −0.4 | 0.2 | −0.6 | −0.2 | 0.6 | 0.2 | −0.6 | −0.2 |
| Decision | 1 | 0 | 1 | 0 | 0 | 1 | 1 | 0 | 0 |

The bits read at the eight $\phi_2$ phases after the input is loaded are the decisions on $V_1\dots V_8$, giving the word $d_1\dots d_8=01001100$.

### Step 3 — Equivalent analog value

For a positive input, the decisions on $V_1,V_2,\dots$ are the ordinary binary digits of $v_{in}^*/V_{REF}$: the decision on $V_k$ is 1 exactly when the $k$-th binary digit is 1. Hence

$$
V_{analog}=V_{REF}\sum_{k=1}^{8}d_k\,2^{-k}=V_{REF}\left(\tfrac14+\tfrac1{32}+\tfrac1{64}\right)=\frac{76}{256}V_{REF}=0.296875\,V_{REF},
$$

within one LSB ($V_{REF}/256=0.0039V_{REF}$) below the input $0.3V_{REF}$.

If the bit timing is read instead so that the first bit is the decision on $v_{in}^*$ itself (decisions on $V_0\dots V_7$), the word is 10100110 and the matching reconstruction uses the signed weights $2d_k-1=\pm1$:

$$
V_{analog}=V_{REF}\sum_{k=1}^{8}(2d_k-1)2^{-k}=V_{REF}\left(\tfrac12-\tfrac14+\tfrac18-\tfrac1{16}-\tfrac1{32}+\tfrac1{64}+\tfrac1{128}-\tfrac1{256}\right)=0.30078\,V_{REF},
$$

within one LSB above the input. Both readings are consistent with the circuit.
