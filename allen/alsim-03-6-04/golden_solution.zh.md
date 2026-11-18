采用嵌套直流扫描：
```
NMOS output characteristics
M1 2 1 0 0 MN W=1U L=1U
VDS 2 0 DC 0
VGS 1 0 DC 0
.MODEL MN NMOS LEVEL=1 VTO=1 KP=110U LAMBDA=0.04
.DC VDS 0 5 0.1 VGS 1 5 1
.PRINT DC I(VDS)
.END
```
内层扫描 $v_{DS}$，外层对 $v_{GS}$ 步进，因此五条曲线都在一次运行中得到并一起绘出（$i_D = -I(\mathrm{VDS})$）。

预期曲线（W/L = 1，level-1 模型，λ 在两个工作区均起作用）：
- $v_{GS}$ = 1 V：$i_D$ = 0（处于阈值）。
- 在 $v_{DS} = v_{GS} - 1$ V = 1、2、3、4 V 以上为饱和区：$i_D = 55\ \mu\mathrm{A/V^2}(v_{GS} - 1)^2(1 + 0.04v_{DS})$，即 55、220、495、880 µA × (1 + 0.04$v_{DS}$)：在 $v_{DS}$ = 5 V 时为 66、264、594 和 1056 µA。
- 在拐点以下为从原点出发的非饱和区抛物线，初始斜率为 $K'(v_{GS} - 1)$ = 110、220、330、440 µA/V；例如 $v_{DS}$ = 1 V 时，$v_{GS}$ = 2、3、4、5 V 对应 57、172、286、400 µA。
