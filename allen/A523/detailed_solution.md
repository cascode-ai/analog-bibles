# Detailed solution - A523

Each comparator compares its tap (+ input) with the common input (− input), so its output is high exactly when the tap voltage exceeds $V^*_{in}$. Compare each of the seven taps with $0.6V_{REF}$.

### Step 1 — Comparator rule

The equal resistors of the string set the taps at $V_{tap,k}=\tfrac{2k-1}{16}V_{REF}$, $k=1,\dots,7$, i.e. $0.125,0.250,\dots,0.875\,V_{REF}$. With the tap on the + input and $V^*_{in}$ on the − input,

$$
\text{output}=1\iff V_{tap}>V^*_{in}=0.6\,V_{REF}.
$$

### Step 2 — Compare each tap

| Comparator (upper to lower) | Tap ($V_{REF}$) | Tap $>0.6V_{REF}$? | Output |
|---|---|---|---|
| 1 | 0.875 | yes | 1 |
| 2 | 0.750 | yes | 1 |
| 3 | 0.625 | yes | 1 |
| 4 | 0.500 | no | 0 |
| 5 | 0.375 | no | 0 |
| 6 | 0.250 | no | 0 |
| 7 | 0.125 | no | 0 |

The closest tap is $0.625V_{REF}$, only $0.025V_{REF}$ above the input, so that comparator still outputs 1.

### Step 3 — Result

Listed from the upper to the lower comparator, the outputs are

$$
1\ 1\ 1\ 0\ 0\ 0\ 0 ,
$$

a thermometer code. The input exceeds four taps, so the encoder produces code 4, the output word 100.
