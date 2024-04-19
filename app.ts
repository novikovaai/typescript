// Запрос в виде платежа

interface IPayment {
    sum: number,
    from: number,
    to: number
}
interface IPaymentRequest extends IPayment {}


interface IDataSuccess extends IPayment{
    "databaseId": number
}

interface IDataFailed{
    "errorMessage": string,
    "errorCode": number
}

enum Status {
    SUCCESS = "success",
    FAILED = "failed",
}

interface IRespondSuccess {
    status: Status.SUCCESS;
    data: IDataSuccess
}

interface IRespondFailed {
    status: Status.FAILED;
    data: IDataFailed
}

type f = (res: IRespondSuccess | IRespondFailed) => number
type Res = IRespondSuccess | IRespondFailed
function isSuccess(res: Res): res is IRespondSuccess {
    return res.status === Status.SUCCESS
}

function checkStatus(res: Res): number{
    if (isSuccess(res)) {
        return res.data.databaseId
    } else {
        return res.data.errorCode
    }
}