# Detailed solution - A003

A digitizer samples the input, quantizes each sample to one of $2^N$ levels and encodes the level as a binary word. With full scale set to 16 amplitude units and $N=4$, one LSB is one amplitude unit, so the code of each sample is simply its amplitude rounded to an integer, written in binary.

### Step 1 — Quantization step and code mapping

The resolution is

$$
\Delta=\frac{\text{FS}}{2^N}=\frac{16}{2^4}=1\ \text{amplitude unit}.
$$

A word $b_3b_2b_1b_0$ represents $D=b_32^{-1}+b_22^{-2}+b_12^{-3}+b_02^{-4}$ of full scale, i.e. the amplitude

$$
D\cdot\text{FS}=16D=8b_3+4b_2+2b_1+b_0 .
$$

So the integer value $k$ of the word is the quantized amplitude in LSBs, and $D=k/16$. The 16 levels are $k=0,\dots,15$. Rounding to the nearest level is used, which keeps the quantization error within $\pm\Delta/2=\pm0.5$; a sample above 15.5 would clip at 1111, but this input never exceeds 14.5.

### Step 2 — Read the samples

From [Fig. 1] the input is one period of a sinusoid about 8 with amplitude 6.5 and period $11T$, so the samples are

$$
x(nT)\approx8+6.5\sin\!\left(\frac{2\pi n}{11}\right),
$$

which matches the curve's grid values to about 0.1. For example $n=4$: $x=8+6.5\sin(8\pi/11)=8+6.5(0.7557)=12.91$.

### Step 3 — Quantize and encode each sample

For $n=4$, $12.91$ rounds to $k=13=8+4+1$, so the word is 1101 and $D=13/16=0.8125$. The same rule gives:

| $t/T$ | Sample | $k$ | $b_3b_2b_1b_0$ | $D$ |
|---|---|---|---|---|
| 0 | 8.0 | 8 | 1000 | 0.5 |
| 1 | 11.5 | 12 | 1100 | 0.75 |
| 2 | 13.9 | 14 | 1110 | 0.875 |
| 3 | 14.4 | 14 | 1110 | 0.875 |
| 4 | 12.9 | 13 | 1101 | 0.8125 |
| 5 | 9.8 | 10 | 1010 | 0.625 |
| 6 | 6.2 | 6 | 0110 | 0.375 |
| 7 | 3.1 | 3 | 0011 | 0.1875 |
| 8 | 1.6 | 2 | 0010 | 0.125 |
| 9 | 2.1 | 2 | 0010 | 0.125 |
| 10 | 4.5 | 4 | 0100 | 0.25 |
| 11 | 8.0 | 8 | 1000 | 0.5 |

The rounding decision thresholds lie at half-integers. The samples at $t/T=1$ (11.51), 3 (14.43), 8 (1.57) and 10 (4.49) sit within about 0.1 of a threshold, closer than the curve can be read, so the neighbouring words there (1011, 1111, 0001, 0101) are equally defensible readings.

### Step 4 — Sketch the digital signal

Holding each code from $nT$ to $(n+1)T$ and plotting it at its level $k$ gives a staircase restricted to integer levels:

![4-bit quantized staircase over the input sinusoid, each step labelled with its word](/q/A003/solution-waveforms.svg)

It is the sample-and-hold staircase of the same input with every step moved to the nearest integer level, so each step differs from the true sample by at most half an LSB.

If the digitizer truncates instead of rounding (code = largest level not above the sample), the thresholds move to the integers and the words become 1000, 1011, 1101, 1110, 1100, 1001, 0110, 0011, 0001, 0010, 0100, 1000, with error between 0 and $-1$ LSB. Under truncation the samples at $t/T=0$, 2, 4, 5, 6, 7, 9 and 11 lie within about 0.2 of an integer threshold, so the adjacent word is equally defensible there (for example 0111 at $t/T=0$ and 11).
