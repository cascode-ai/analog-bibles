# Detailed solution - A518

This is the unipolar algorithmic converter: each iteration doubles the held voltage, compares it with $V_{REF}$, and subtracts $V_{REF}$ when the bit is 1. Iterate five times with the actual gain 2.1 and with the ideal gain 2, compare the words, and reconstruct the analog equivalent of the actual word.

### Step 1 — Iteration rule

With $V_{b,0}=V_{in}^*$ and gain $A$, iteration $k$ computes

$$
V_{a,k}=A\,V_{b,k-1},\qquad
d_k=\begin{cases}1, & V_{a,k}>V_{REF}\\ 0, & \text{otherwise}\end{cases},\qquad
V_{b,k}=V_{a,k}-d_kV_{REF}.
$$

The bits $d_1\dots d_5$ come out MSB first.

### Step 2 — Five iterations with $A=2.1$ and with $A=2$

Representative iteration 4 with $A=2.1$, in units of $V_{REF}$: $V_{b,3}=0.899$, so $V_{a,4}=2.1(0.899)=1.887>1$, the bit is 1 and $V_{b,4}=0.887$. With the ideal gain, $V_{b,3}=0.4$ and $V_{a,4}=0.8<1$, so the ideal bit is 0.

| $k$ | $V_a$ ($A=2.1$) | $V_b$ ($A=2.1$) | Bit | $V_a$ ($A=2$) | $V_b$ ($A=2$) | Ideal bit |
|---|---|---|---|---|---|---|
| 1 | 1.680 | 0.680 | 1 | 1.6 | 0.6 | 1 |
| 2 | 1.428 | 0.428 | 1 | 1.2 | 0.2 | 1 |
| 3 | 0.899 | 0.899 | 0 | 0.4 | 0.4 | 0 |
| 4 | 1.887 | 0.887 | **1** | 0.8 | 0.8 | **0** |
| 5 | 1.864 | 0.864 | 1 | 1.6 | 0.6 | 1 |

Each value holds for one iteration period $T$, so $V_a$ and $V_b$ are staircases versus $t/T$:

![Va and Vb versus t/T for gains 2.1 and 2, with the comparison threshold VREF and the bit of each iteration](/q/A518/solution-waveforms.svg)

### Step 3 — Word, analog equivalent and error bit

The actual 5-bit word and its analog equivalent are

$$
11011,\qquad
V_{analog}=V_{REF}\left(\tfrac12+\tfrac14+\tfrac1{16}+\tfrac1{32}\right)=\tfrac{27}{32}V_{REF}=0.84375\,V_{REF}.
$$

With the ideal gain the word is 11001, $\tfrac{25}{32}V_{REF}=0.78125\,V_{REF}$, within one LSB below the $0.8V_{REF}$ input. The **4th bit** is in error. The 5% excess gain accumulates in the residue: by iteration 3 it has raised $V_b$ from $0.4V_{REF}$ to $0.899V_{REF}$, enough for the next doubled value to exceed $V_{REF}$.
