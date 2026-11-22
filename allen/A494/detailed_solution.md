# Detailed solution - A494

Iterate the converter recursion with the ideal references $\pm V_{REF}$ and with the actual references $+0.9V_{REF}$ / $-0.8V_{REF}$, and compare the outputs after each conversion with the half-LSB tolerance for that number of bits.

### Step 1 — Recursion, bit sequence and tolerance

With $v_0=0$ and $A=0.5$, each conversion halves the held output and adds the reference selected by the current bit:

$$
v_k=0.5\,v_{k-1}+\begin{cases}V_{REF1}, & b_k=1\\ V_{REF2}, & b_k=0\end{cases}
$$

Ideally $V_{REF1}=+V_{REF}$ and $V_{REF2}=-V_{REF}$; actually $V_{REF1}=0.9V_{REF}$ and $V_{REF2}=-0.8V_{REF}$. The word 10011 (MSB to LSB) is applied LSB first, so $b_1,\dots,b_5=1,1,0,0,1$.

After $k$ ideal conversions the bit weights are $2^{j-k}$, the smallest being $2^{1-k}$; flipping that bit moves the output by $2\cdot2^{1-k}V_{REF}$, so $1$ LSB $=2^{2-k}V_{REF}$ and the tolerance is $\pm2^{1-k}V_{REF}$: $1$, $0.5$, $0.25$, $0.125$, $0.0625\,V_{REF}$ for $k=1$ to $5$.

### Step 2 — Iterate with ideal and actual references

Representative step, $k=4$ with a bit 0, in units of $V_{REF}$:

$$
v_4^{ideal}=-1+0.5(-0.25)=-1.125,\qquad
v_4^{actual}=-0.8+0.5(-0.125)=-0.8625 .
$$

| $k$ | Bit | Ideal $v_k/V_{REF}$ | Actual $v_k/V_{REF}$ | Deviation | Tolerance $\pm2^{1-k}$ | Within? |
|---|---|---|---|---|---|---|
| 1 | 1 | 1 | 0.9 | −0.1 | 1 | yes |
| 2 | 1 | 1.5 | 1.35 | −0.15 | 0.5 | yes |
| 3 | 0 | −0.25 | −0.125 | +0.125 | 0.25 | yes |
| 4 | 0 | −1.125 | −0.8625 | +0.2625 | 0.125 | **no** |
| 5 | 1 | 0.4375 | 0.46875 | +0.03125 | 0.0625 | yes |

The other actual values follow the same way: $0.9+0.5(0.9)=1.35$, $-0.8+0.5(1.35)=-0.125$, and $0.9+0.5(-0.8625)=0.46875$.

### Step 3 — Locate the error

The deviation first exceeds half an LSB at the **4th bit conversion**: $0.2625\,V_{REF}>0.125\,V_{REF}$.

The deviation obeys $\varepsilon_k=0.5\,\varepsilon_{k-1}+\delta_k$, where $\delta_k=-0.1V_{REF}$ for a bit 1 and $+0.2V_{REF}$ for a bit 0. Two consecutive bits 0 at $k=3,4$ each add $+0.2V_{REF}$, so $\varepsilon_4=0.5(0.125)+0.2=0.2625\,V_{REF}$, while the tolerance has shrunk to $0.125\,V_{REF}$.

At $k=5$ the last bit is 1, so $\delta_5=-0.1V_{REF}$ partly cancels the halved earlier error: $\varepsilon_5=0.5(0.2625)-0.1=0.03125\,V_{REF}$, inside $\pm0.0625\,V_{REF}$. The final 5-bit output thus happens to be within $\pm\tfrac12$ LSB, but the conversion is already in error at the 4th bit.
