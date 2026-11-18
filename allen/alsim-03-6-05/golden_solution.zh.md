输入文件：
```
PMOS output characteristics
M1 2 1 0 0 MOSP W=5U L=1U
VDS 2 0 DC 0
VGS 1 0 DC 0
.MODEL MOSP PMOS VTO=-0.7 KP=50U GAMMA=0.57 LAMBDA=0.05 PHI=0.8
.DC VDS 0 -5 -0.2 VGS -1 -5 -1
.PRINT DC V(2) I(VDS)
.END
```
预期结果（level 1，$K'W/(2L)$ = 125 µA/V²）：漏极电流从漏极流出（$i_D$ 为负）；在饱和区，拐点 $|v_{DS}|$ = 0.3、1.3、2.3、3.3、4.3 V 之后，$|i_D| = 125\ \mu\mathrm{A/V^2}(|v_{GS}| - 0.7)^2(1 + 0.05|v_{DS}|)$。
- $|v_{DS}|$ = 5 V 时：$v_{GS}$ = −1 … −5 V 对应 14.1 µA、264 µA、827 µA、1.70 mA 和 2.89 mA。
- $|v_{DS}|$ = 2 V 时：12.4 µA、232 µA、715 µA、1.27 mA、1.82 mA。
- 与同尺寸的 n 沟道器件相比（$v_{GS} = v_{DS}$ = 5 V 时 ≈ 6.1 mA），电流约为其 0.47 倍，这由 $K'_P/K'_N$ = 50/110 以及更大的 λ 决定。
