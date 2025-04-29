/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Delete {
  Date?: string
}

export interface AccountListItemWrap {
  Accounts?: AccountListItem[]
}

export interface Customer {
  "@url"?: string
  /**
   * @minLength 1
   * @maxLength 1024
   */
  Address1?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  Address2?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  City?: string
  Country?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  Comments?: string
  /**
   * @minLength 3
   * @maxLength 3
   */
  Currency?: string
  CostCenter?: string
  /**
   * @minLength 2
   * @maxLength 2
   */
  CountryCode?: string
  Active?: boolean
  /**
   * @minLength 0
   * @maxLength 1024
   */
  CustomerNumber?: string
  DefaultDeliveryTypes?: CustomerDefaultDeliveryTypes
  DefaultTemplates?: CustomerDefaultTemplates
  /**
   * @minLength 0
   * @maxLength 1024
   */
  DeliveryAddress1?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  DeliveryAddress2?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  DeliveryCity?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  DeliveryCountry?: string
  /**
   * @minLength 2
   * @maxLength 2
   */
  DeliveryCountryCode?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  DeliveryFax?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  DeliveryName?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  DeliveryPhone1?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  DeliveryPhone2?: string
  /**
   * @minLength 0
   * @maxLength 10
   */
  DeliveryZipCode?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  Email?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  EmailInvoice?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  EmailInvoiceBCC?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  EmailInvoiceCC?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  EmailOffer?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  EmailOfferBCC?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  EmailOfferCC?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  EmailOrder?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  EmailOrderBCC?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  EmailOrderCC?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  ExternalReference?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  Fax?: string
  /**
   * @minLength 13
   * @maxLength 13
   */
  GLN?: string
  /**
   * @minLength 13
   * @maxLength 13
   */
  GLNDelivery?: string
  InvoiceAdministrationFee?: string
  /** @format double */
  InvoiceDiscount?: number
  InvoiceFreight?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  InvoiceRemark?: string
  /**
   * @minLength 1
   * @maxLength 1024
   */
  Name: string
  OrganisationNumber?: string
  /**
   * @minLength 0
   * @maxLength 50
   */
  OurReference?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  Phone1?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  Phone2?: string
  PriceList?: string
  Project?: string
  /**
   * @minLength 4
   * @maxLength 4
   */
  SalesAccount?: string
  ShowPriceVATIncluded?: boolean
  TermsOfDelivery?: string
  TermsOfPayment?: string
  Type?: "PRIVATE" | "COMPANY"
  VATNumber?: string
  VATType?: "SEVAT" | "SEREVERSEDVAT" | "EUREVERSEDVAT" | "EUVAT" | "EXPORT"
  /**
   * @minLength 0
   * @maxLength 128
   */
  VisitingAddress?: string
  /**
   * @minLength 0
   * @maxLength 128
   */
  VisitingCity?: string
  /**
   * @minLength 0
   * @maxLength 128
   */
  VisitingCountry?: string
  /**
   * @minLength 2
   * @maxLength 2
   */
  VisitingCountryCode?: string
  /**
   * @minLength 0
   * @maxLength 10
   */
  VisitingZipCode?: string
  WayOfDelivery?: string
  /**
   * @minLength 0
   * @maxLength 128
   */
  WWW?: string
  /**
   * @minLength 0
   * @maxLength 50
   */
  YourReference?: string
  /**
   * @minLength 0
   * @maxLength 10
   */
  ZipCode?: string
}

export interface TaxReductionListItemList {
  TaxReductions?: TaxReductionListItem[]
}

export interface ListAsset {
  "@url"?: string
  /** @format int32 */
  Id?: number
  Number?: string
  Description?: string
  Status?: string
  StatusId?: string
  Type?: string
  /** @format int32 */
  TypeId?: number
  /** @format int32 */
  AcquisitionValue?: number
  AcquisitionDate?: string
  DepreciationFinal?: string
  DepreciatedTo?: string
}

export interface UpdateAssetWrap {
  AssetType?: UpdateAsset
}

export interface SupplierInvoiceSupplierInvoiceRow {
  /**
   * @format int32
   * @min 1000
   * @max 9999
   */
  Account?: number
  ArticleNumber?: string
  Code?:
    | "TOT"
    | "VAT"
    | "FRT"
    | "AFE"
    | "ROV"
    | "CND"
    | "CNC"
    | "PRD"
    | "PRC"
    | "SRD"
    | "SRC"
    | "PRE"
    | "GWB"
    | "ACC"
  CostCenter?: string
  AccountDescription?: string
  ItemDescription?: string
  /** @format double */
  Debit?: number
  /** @format double */
  DebitCurrency?: number
  /** @format double */
  Credit?: number
  /** @format double */
  CreditCurrency?: number
  Project?: string
  /**
   * @minLength 0
   * @maxLength 100
   */
  TransactionInformation?: string
  /** @format double */
  Price?: number
  /** @format int32 */
  Quantity?: number
  /** @format double */
  Total?: number
  Unit?: string
  StockPointCode?: string
  StockLocationCode?: string
}

export interface SalaryTransactionListItemList {
  SalaryTransactions?: SalaryTransactionListItem[]
}

export interface History {
  /** @format int32 */
  Id?: number
  Date?: string
  /** @format int32 */
  EventId?: number
  Amount?: string
  /** @format int32 */
  UserId?: number
  UserName?: string
  Notes?: string
  /** @format int32 */
  VoucherNumber?: number
  VoucherSeries?: string
  /** @format int32 */
  VoucherYear?: number
  /** @format int32 */
  SupplierInvoice?: number
}

export interface ArticleWrap {
  Article?: Article
}

export interface ListAssetWrap {
  Assets?: ListAsset[]
}

export interface TaxReductionWrap {
  TaxReduction: TaxReduction
}

export interface UpdateAsset {
  Description?: string
  Notes?: string
}

export interface SupplierInvoicePaymentListItem {
  "@url"?: string
  /** @format double */
  Amount?: number
  Booked?: boolean
  /**
   * @minLength 3
   * @maxLength 3
   */
  Currency?: string
  /** @format double */
  CurrencyRate?: number
  /** @format double */
  CurrencyUnit?: number
  InvoiceNumber: string
  /** @format int32 */
  Number?: number
  /** @format date */
  PaymentDate?: string
  Source?: "manual" | "direct"
  WriteOffExist?: boolean
}

export interface SupplierInvoiceListItemWrap {
  SupplierInvoices?: SupplierInvoiceListItem[]
}

export interface ContractListItemList {
  Contracts?: ContractListItem[]
}

export interface Currency {
  /**
   * @minLength 3
   * @maxLength 3
   */
  currency: string
  /**
   * @min 0.000001
   * @exclusiveMin false
   */
  rate: number
  /**
   * @format int32
   * @min 1
   */
  unit?: number
}

export interface CurrencyWrap {
  Currency: Currency
}

export interface DocumentReference {
  type?: string
  id?: string
}

export interface CostCenterWrap {
  CostCenter?: CostCenter
}

export interface DeleteWrap {
  Asset?: Delete
}

export interface InvoiceAccrualWrap {
  InvoiceAccrual?: InvoiceAccrual
}

export interface MetaInformation {
  /** @format int32 */
  "@TotalResources"?: number
  /** @format int32 */
  "@TotalPages"?: number
  /** @format int32 */
  "@CurrentPage"?: number
}

export interface ContractAccrualWrap {
  ContractAccrual?: ContractAccrual
}

export interface FolderFolderRow {
  "@url"?: string
  Id?: string
  Name?: string
}

export interface VoucherSeries {
  "@url"?: string
  /**
   * @minLength 1
   * @maxLength 10
   */
  Code: string
  /**
   * @minLength 0
   * @maxLength 200
   */
  Description?: string
  Manual?: boolean
  /** @format int32 */
  NextVoucherNumber?: number
  /** @format int32 */
  Year?: number
  Approver?: VoucherSeriesApprover
}

export interface Project {
  "@url"?: string
  /**
   * @minLength 0
   * @maxLength 512
   */
  Comments?: string
  /**
   * @minLength 0
   * @maxLength 50
   */
  ContactPerson?: string
  /**
   * @minLength 1
   * @maxLength 50
   */
  Description: string
  /** @format date */
  EndDate?: string
  /**
   * @minLength 0
   * @maxLength 50
   */
  ProjectLeader?: string
  /**
   * @minLength 0
   * @maxLength 20
   */
  ProjectNumber?: string
  Status?: "NOTSTARTED" | "ONGOING" | "COMPLETED"
  /** @format date */
  StartDate?: string
}

export interface Depreciation {
  DepreciateUntil?: string
  AssetIds?: number[]
}

export interface CustomerReference {
  CustomerReferenceRows?: CustomerReferenceCustomerReferenceRow[]
}

export interface SupplierInvoiceFileConnectionWrap {
  SupplierInvoiceFileConnection?: SupplierInvoiceFileConnection
}

export interface PurchaseOrderRowNote {
  note?: string
  /** @format int64 */
  rowNum?: number
  /** @format int64 */
  purchaseOrderId?: number
  /** @format uuid */
  purchaseOrderRowId?: string
}

export interface Employee {
  /**
   * @minLength 1
   * @maxLength 15
   */
  EmployeeId?: string
  PersonalIdentityNumber?: string
  FirstName: string
  LastName: string
  FullName?: string
  Address1?: string
  Address2?: string
  PostCode?: string
  City?: string
  Country?: string
  Phone1?: string
  Phone2?: string
  Email: string
  /** @format date */
  EmploymentDate?: string
  EmploymentForm?: "TV" | "PRO" | "TID" | "SVT" | "VIK" | "PRJ" | "PRA" | "FER" | "SES" | "NEJ"
  SalaryForm?: "MAN" | "TIM"
  /**
   * @minLength 0
   * @maxLength 30
   */
  JobTitle?: string
  PersonelType?: "TJM" | "ARB"
  ScheduleId?: string
  ForaType?:
    | "A"
    | "A51"
    | "A52"
    | "A53"
    | "A54"
    | "A55"
    | "A56"
    | "A57"
    | "A58"
    | "A59"
    | "A60"
    | "A61"
    | "A62"
    | "A63"
    | "A64"
    | "A65"
    | "A66"
    | "A67"
    | "A68"
    | "A69"
    | "A70"
    | "A71"
    | "A72"
    | "A73"
    | "A74"
    | "A75"
    | "A76"
    | "A77"
    | "A78"
    | "A79"
    | "A80"
    | "A81"
    | "A82"
    | "A83"
    | "A84"
    | "A85"
    | "A86"
    | "A3"
    | "A91"
    | "A92"
    | "A93"
    | "A11"
    | "A12"
    | "A13"
    | "A14"
    | "A15"
    | "A16"
    | "A17"
    | "A18"
    | "A19"
    | "A20"
    | "A21"
    | "A22"
    | "A23"
    | "A24"
    | "A25"
    | "A26"
    | "A27"
    | "A28"
    | "A29"
    | "A30"
    | "A41"
    | "A42"
    | "A43"
    | "A44"
    | "A45"
    | "A46"
    | "A47"
    | "A48"
    | "T"
    | "T6"
    | "-"
  MonthlySalary?: string
  HourlyPay?: string
  TaxAllowance?: "HUV" | "EXT" | "TMP" | "STU" | "EJ" | "???"
  TaxTable?: string
  /**
   * @format int32
   * @min 1
   * @max 6
   */
  TaxColumn?: number
  AutoNonRecurringTax?: boolean
  NonRecurringTax?: string
  Inactive?: boolean
  ClearingNo?: string
  BankAccountNo?: string
  /** @format date */
  EmployedTo?: string
  AverageWeeklyHours?: string
  AverageHourlyWage?: string
  DatedWages?: EmployeeDatedWage[]
  DatedSchedules?: EmployeeDatedSchedule[]
}

export interface PriceListItemList {
  Prices?: PriceListItem[]
}

export interface PredefinedVoucherSeries {
  "@url"?: string
  Name?: string
  /**
   * @minLength 0
   * @maxLength 1
   */
  VoucherSeries: string
}

export interface AbsenceTransactionPayload {
  EmployeeId: string
  CauseCode:
    | "ASK"
    | "FPE"
    | "FRA"
    | "HAV"
    | "KOM"
    | "MIL"
    | "NAR"
    | "OS1"
    | "OS2"
    | "OS3"
    | "OS4"
    | "OS5"
    | "PAP"
    | "PEM"
    | "PER"
    | "SEM"
    | "SJK"
    | "SMB"
    | "SVE"
    | "TJL"
    | "UTB"
    | "VAB"
  /** @format date */
  Date: string
  /** @format float */
  Extent?: number
  /** @format float */
  Hours?: number
  HolidayEntitling?: boolean
  CostCenter?: string
  Project?: string
}

export interface CreateAssetFileConnection {
  FileId?: string
  AssetId?: string
}

export interface InvoicePaymentListItem {
  "@url"?: string
  /** @format double */
  Amount?: number
  Booked?: boolean
  /**
   * @minLength 3
   * @maxLength 3
   */
  Currency?: string
  /** @format double */
  CurrencyRate?: number
  /** @format double */
  CurrencyUnit?: number
  /** @format int32 */
  InvoiceNumber: number
  Number?: string
  /** @format date */
  PaymentDate?: string
  Source?: string
  WriteOffExist?: boolean
}

export interface OrderListItem {
  "@url"?: string
  Cancelled?: boolean
  /**
   * @minLength 0
   * @maxLength 3
   */
  Currency?: string
  CustomerName?: string
  CustomerNumber: string
  /** @format date */
  DeliveryDate?: string
  DocumentNumber?: string
  ExternalInvoiceReference1?: string
  ExternalInvoiceReference2?: string
  /** @format date */
  OrderDate?: string
  OrderType?: string
  Project?: string
  Sent?: boolean
  /** @format double */
  Total?: number
}

export interface SupplierInvoicePaymentListItemList {
  SupplierInvoicePayments?: SupplierInvoicePaymentListItem[]
}

export interface TaxReductionListItem {
  "@url"?: string
  /** @format double */
  ApprovedAmount?: number
  /**
   * @minLength 1
   * @maxLength 2147483647
   */
  CustomerName: string
  /** @format int32 */
  Id?: number
  ReferenceDocumentType: "OFFER" | "ORDER" | "INVOICE"
  /** @format int32 */
  ReferenceNumber: number
  /**
   * @minLength 10
   * @maxLength 13
   */
  SocialSecurityNumber: string
}

export interface TermsOfPaymentWrap {
  TermsOfPayment: TermsOfPayment
}

export interface PriceWrap {
  Price?: Price
}

export interface CustomerListItemList {
  Customers?: CustomerListItem[]
  MetaInformation?: MetaInformation
}

export interface ProjectWrap {
  Project?: Project
}

export interface ContractWrap {
  Contract?: Contract
}

export interface StockTaking {
  /** @format int64 */
  id?: number
  /** @format date */
  date?: string
  /**
   * @minLength 1
   * @maxLength 50
   */
  name: string
  /**
   * @minLength 1
   * @maxLength 50
   */
  responsible: string
  /** @pattern planning|started|completed|voided */
  state: string
  rows?: StockTakingRow[]
  /** @format int32 */
  sortingId?: number
  projectId?: string
  costCenterCode?: string
  usingStockPoints?: boolean
}

export interface AssetFileConnection {
  "@url"?: string
  FileId?: string
  Name?: string
  AssetId?: string
}

export interface VoucherSeriesListItemApprover {
  /** @format int32 */
  Id?: number
  Name?: string
}

export interface ArticleFileConnectionListItemWrap {
  ArticleFileConnections?: ArticleFileConnectionListItem[]
}

export interface PriceListItem {
  "@url"?: string
  ArticleNumber: string
  /** @format double */
  FromQuantity?: number
  PriceList: string
  /** @format double */
  Price?: number
}

export interface OrderLabel {
  /** @format int32 */
  Id?: number
}

export interface InvoiceResponse {
  "@url": string
  /** @format float */
  BalanceIncludeFees: number
  /** @format float */
  BalanceIncludeFeesCurrency: number
  /** @format float */
  CurrentCapitalBalance: number
  /** @format float */
  CurrentCapitalBalanceCurrency: number
  InvoiceDocumentURL?: string
  /** @format int32 */
  InvoiceNumber: number
  NextEvent: string
  /** @format date */
  NextEventDate: string
  OCRNumber: string
  Service: string
  ServiceName: string
  Status: string
}

export interface FinancialYearWrap {
  FinancialYear: FinancialYear
}

export interface InvoicePayment {
  "@url"?: string
  /** @format double */
  Amount?: number
  /** @format double */
  AmountCurrency?: number
  Booked?: boolean
  /**
   * @minLength 3
   * @maxLength 3
   */
  Currency?: string
  /** @format double */
  CurrencyRate?: number
  /** @format double */
  CurrencyUnit?: number
  ExternalInvoiceReference1?: string
  ExternalInvoiceReference2?: string
  InvoiceCustomerName?: string
  InvoiceCustomerNumber?: string
  /** @format int32 */
  InvoiceNumber: number
  /** @format date */
  InvoiceDueDate?: string
  InvoiceOCR?: string
  InvoiceTotal?: string
  ModeOfPayment?: string
  /**
   * @format int32
   * @min 1000
   * @max 9999
   */
  ModeOfPaymentAccount?: number
  Number?: string
  /** @format date */
  PaymentDate?: string
  /** @format int32 */
  VoucherNumber?: number
  VoucherSeries?: string
  /** @format int32 */
  VoucherYear?: number
  Source?: string
  WriteOffs?: InvoicePaymentWriteOff[]
}

export interface VoucherWrap {
  Voucher?: Voucher
}

export interface InvoiceResponseWrap {
  NoxFinansInvoice?: InvoiceResponse
}

export interface BaseArticleRegistration {
  /** @format uuid */
  id?: string
  costCenter?: TRCostCenter
  customer: TRCustomer
  project?: TRProject
  articleRegistrations?: ArticleRegistration[]
  registeredArticle?: ArticleRegistration
  /** @format date */
  purchaseDate: string
  ownerId?: string
  /** @format int64 */
  version?: number
  /** @format date-time */
  createdTime?: string
  registrationType?: "WORK" | "ABSENCE" | "ARTICLE"
}

export interface MeWrap {
  MeInformation?: Me
}

export interface OfferOfferRow {
  /** @format int32 */
  AccountNumber?: number
  ArticleNumber?: string
  ContributionPercent?: string
  ContributionValue?: string
  CostCenter?: string
  Description?: string
  /** @format double */
  Discount?: number
  DiscountType?: "AMOUNT" | "PERCENT"
  HouseWork?: boolean
  /**
   * @format double
   * @max 999
   */
  HouseWorkHoursToReport?: number
  HouseWorkType?:
    | "CONSTRUCTION"
    | "ELECTRICITY"
    | "GLASSMETALWORK"
    | "GROUNDDRAINAGEWORK"
    | "MASONRY"
    | "PAINTINGWALLPAPERING"
    | "HVAC"
    | "CLEANING"
    | "TEXTILECLOTHING"
    | "COOKING"
    | "SNOWPLOWING"
    | "GARDENING"
    | "BABYSITTING"
    | "OTHERCARE"
    | "TUTORING"
    | "OTHERCOSTS"
  /** @format double */
  Price?: number
  Project?: string
  Quantity?: string
  /** @format int32 */
  RowId?: number
  /** @format double */
  Total?: number
  Unit?: string
  /** @format int32 */
  VAT?: number
}

export interface CreatePayload {
  InvoiceNumber: string
  SendMethod: string
  Service: string
}

export interface ScrapWrap {
  Asset?: Scrap
}

export interface ProductionOrderPatch {
  /**
   * @minLength 0
   * @maxLength 1000
   */
  note?: string
}

export interface InvoiceListItem {
  "@url"?: string
  /** @format double */
  Balance?: number
  Booked?: boolean
  Cancelled?: boolean
  CostCenter?: string
  Currency?: string
  /** @format double */
  CurrencyRate?: number
  /** @format double */
  CurrencyUnit?: number
  CustomerName?: string
  CustomerNumber?: string
  DocumentNumber?: string
  /** @format date */
  DueDate?: string
  ExternalInvoiceReference1?: string
  ExternalInvoiceReference2?: string
  /** @format date */
  InvoiceDate?: string
  InvoiceType?: "INVOICE" | "AGREEMENTINVOICE" | "INTRESTINVOICE" | "SUMMARYINVOICE" | "CASHINVOICE"
  NoxFinans?: boolean
  OCR?: string
  /** @format int32 */
  VoucherNumber?: number
  VoucherSeries?: string
  /** @format int32 */
  VoucherYear?: number
  WayOfDelivery?: string
  TermsOfPayment?: string
  Project?: string
  Sent?: boolean
  /** @format double */
  Total?: number
  /** @format date */
  FinalPayDate?: string
}

export interface TRCustomer {
  /**
   * @minLength 0
   * @maxLength 40
   */
  id?: string
  /**
   * @minLength 0
   * @maxLength 255
   */
  name?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  number?: string
  active?: boolean
  deleted?: boolean
  priceList?: string
  accountManager?: string
  defaultProjectId?: string
  /** @format int32 */
  isBusiness?: number
  propertyDesignation?: string
}

export interface PausePayload {
  /** @format date */
  PausedUntilDate: string
}

export interface WriteUp {
  /** @format int32 */
  Amount?: number
  Comment?: string
  Date?: string
}

export interface PrintTemplateList {
  PrintTemplates?: PrintTemplate[]
}

export interface ReleaseParentOrder {
  releasedParentOrder?: boolean
}

export interface PartialPurchaseOrder {
  /** @format date */
  deliveryDate?: string
  /**
   * @minLength 0
   * @maxLength 1000
   */
  note?: string
  /**
   * @minLength 0
   * @maxLength 50
   */
  internalReference?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  supplierName?: string
  /**
   * @minLength 0
   * @maxLength 1000
   */
  messageToSupplier?: string
}

export interface AccountChartWrap {
  AccountCharts?: AccountChart[]
}

export interface StockLocation {
  /** @format uuid */
  id?: string
  /**
   * @minLength 1
   * @maxLength 20
   */
  code: string
  /**
   * @minLength 0
   * @maxLength 25
   */
  name?: string
  /** @format uuid */
  stockPointId?: string
}

export interface LabelWrap {
  Label: Label
}

export interface ArticleListItemList {
  MetaInformation?: MetaInformation
  Articles?: ArticleListItem[]
}

export interface Label {
  /** @format int32 */
  Id?: number
  /**
   * @minLength 1
   * @maxLength 25
   */
  Description: string
}

export interface AverageCost {
  itemId?: string
  /** @format uuid */
  stockPointId?: string
  averageCostInSEK?: number
}

export interface Attachment {
  /** @format uuid */
  id?: string
  /** @format int64 */
  entityId?: number
  entityType?: "OF" | "O" | "F" | "C" | "LGR_IO" | "LGR_IG"
  fileId?: string
  includeOnSend?: boolean
}

export interface FolderWrap {
  Folder?: Folder
}

export interface SupplierInvoiceAccrualListItemList {
  SupplierInvoiceAccruals?: SupplierInvoiceAccrualListItem[]
}

export interface AccountPayloadOpeningQuantities {
  Project?: string
  /** @format int32 */
  Balance?: number
}

export interface EmployeeListItem {
  /**
   * @minLength 1
   * @maxLength 15
   */
  EmployeeId?: string
  PersonalIdentityNumber?: string
  FirstName: string
  LastName: string
  FullName?: string
  Address1?: string
  Address2?: string
  PostCode?: string
  City?: string
  Country?: string
  Phone1?: string
  Phone2?: string
  Email: string
  /** @format date */
  EmploymentDate?: string
  EmploymentForm?: "TV" | "PRO" | "TID" | "SVT" | "VIK" | "PRJ" | "PRA" | "FER" | "SES" | "NEJ"
  SalaryForm?: "MAN" | "TIM"
  /**
   * @minLength 0
   * @maxLength 30
   */
  JobTitle?: string
  PersonelType?: "TJM" | "ARB"
  ScheduleId?: string
  ForaType?:
    | "A"
    | "A51"
    | "A52"
    | "A53"
    | "A54"
    | "A55"
    | "A56"
    | "A57"
    | "A58"
    | "A59"
    | "A60"
    | "A61"
    | "A62"
    | "A63"
    | "A64"
    | "A65"
    | "A66"
    | "A67"
    | "A68"
    | "A69"
    | "A70"
    | "A71"
    | "A72"
    | "A73"
    | "A74"
    | "A75"
    | "A76"
    | "A77"
    | "A78"
    | "A79"
    | "A80"
    | "A81"
    | "A82"
    | "A83"
    | "A84"
    | "A85"
    | "A86"
    | "A3"
    | "A91"
    | "A92"
    | "A93"
    | "A11"
    | "A12"
    | "A13"
    | "A14"
    | "A15"
    | "A16"
    | "A17"
    | "A18"
    | "A19"
    | "A20"
    | "A21"
    | "A22"
    | "A23"
    | "A24"
    | "A25"
    | "A26"
    | "A27"
    | "A28"
    | "A29"
    | "A30"
    | "A41"
    | "A42"
    | "A43"
    | "A44"
    | "A45"
    | "A46"
    | "A47"
    | "A48"
    | "T"
    | "T6"
    | "-"
  MonthlySalary?: string
  HourlyPay?: string
  TaxAllowance?: "HUV" | "EXT" | "TMP" | "STU" | "EJ" | "???"
  TaxTable?: string
  /**
   * @format int32
   * @min 1
   * @max 6
   */
  TaxColumn?: number
  AutoNonRecurringTax?: boolean
  NonRecurringTax?: string
  Inactive?: boolean
  ClearingNo?: string
  BankAccountNo?: string
  /** @format date */
  EmployedTo?: string
  AverageWeeklyHours?: string
  AverageHourlyWage?: string
  DatedWages?: EmployeeDatedWage[]
  DatedSchedules?: EmployeeDatedSchedule[]
  "@url"?: string
}

export interface FinancialYearWrapList {
  FinancialYears?: FinancialYear[]
}

export interface ContractTemplateInvoiceRow {
  /** @format int32 */
  AccountNumber?: number
  ArticleNumber?: string
  CostCenter?: string
  DeliveredQuantity?: string
  Description?: string
  /** @format double */
  Discount?: number
  DiscountType?: "PERCENT" | "AMOUNT"
  /** @format double */
  Price?: number
  Project?: string
  Unit?: string
}

export interface TrustedEmailSender {
  TrustedSenders?: TrustedEmailSenderTrustedSender[]
  RejectedSenders?: TrustedEmailSenderRejectedSender[]
}

export interface TRItemPrice {
  list?: string
  price?: number
}

export interface ResponseStateChange {
  responseState?:
    | "NOT_SENT"
    | "SENT"
    | "ACCEPTED_WITH_REQ_DLV_DATE"
    | "ACCEPTED_WITH_CHANGED_DLV_DATE"
    | "PARTLY_ACCEPTED_WITH_REQ_DLV_DATE"
    | "PARTLY_ACCEPTED_WITH_CHANGED_DLV_DATE"
    | "REJECTED"
}

export interface AccountChart {
  Name?: string
}

export interface WriteDown {
  /** @format int32 */
  Amount?: number
  Comment?: string
  Date?: string
}

export interface ManualObAsset {
  /** @format int32 */
  Amount?: number
  Comment?: string
}

export interface PredefinedAccountWrap {
  PreDefinedAccount: PredefinedAccount
}

export interface TRCostCenter {
  /**
   * @minLength 0
   * @maxLength 40
   */
  id?: string
  /**
   * @minLength 0
   * @maxLength 255
   */
  name?: string
  active?: string
}

export interface OrderListItemList {
  Orders?: OrderListItem[]
}

export interface ModeOfPaymentList {
  ModesOfPayments?: ModeOfPayment[]
}

export interface CompanySettings {
  Address?: string
  BG?: string
  BIC?: string
  BranchCode?: string
  City?: string
  ContactFirstName?: string
  ContactLastName?: string
  Country?: string
  CountryCode?: string
  DatabaseNumber?: string
  Domicile?: string
  Email?: string
  Fax?: string
  IBAN?: string
  Name?: string
  OrganizationNumber?: string
  PG?: string
  Phone1?: string
  Phone2?: string
  TaxEnabled?: boolean
  VATNumber?: string
  VisitAddress?: string
  VisitCity?: string
  VisitCountry?: string
  VisitCountryCode?: string
  VisitName?: string
  VisitZipCode?: string
  WWW?: string
  ZipCode?: string
}

export interface SupplierListItemList {
  Suppliers?: SupplierListItem[]
}

export interface TermsOfDelivery {
  "@url"?: string
  /**
   * @minLength 1
   * @maxLength 20
   */
  Code: string
  /**
   * @minLength 0
   * @maxLength 200
   */
  Description: string
  /**
   * @minLength 0
   * @maxLength 100
   */
  DescriptionEnglish?: string
}

export interface SupplierInvoicePaymentWriteOff {
  /** @format double */
  Amount?: number
  /**
   * @format int32
   * @min 1000
   * @max 9999
   */
  AccountNumber?: number
  CostCenter?: string
  /**
   * @minLength 3
   * @maxLength 3
   */
  Currency?: string
  Description?: string
  TransactionInformation?: string
  Project?: string
}

export interface TermsOfDeliveryWrap {
  TermsOfDelivery: TermsOfDelivery
}

export interface InvoiceInvoiceRow {
  /**
   * @format int32
   * @min 1000
   * @max 9999
   */
  AccountNumber?: number
  ArticleNumber?: string
  ContributionPercent?: string
  ContributionValue?: string
  CostCenter?: string
  DeliveredQuantity?: string
  /**
   * @minLength 0
   * @maxLength 255
   */
  Description?: string
  /** @format double */
  Discount?: number
  DiscountType?: "AMOUNT" | "PERCENT"
  HouseWork?: boolean
  /**
   * @format int32
   * @max 999
   */
  HouseWorkHoursToReport?: number
  HouseWorkType?:
    | "CONSTRUCTION"
    | "ELECTRICITY"
    | "GLASSMETALWORK"
    | "GROUNDDRAINAGEWORK"
    | "MASONRY"
    | "PAINTINGWALLPAPERING"
    | "HVAC"
    | "MAJORAPPLIANCEREPAIR"
    | "MOVINGSERVICES"
    | "ITSERVICES"
    | "CLEANING"
    | "TEXTILECLOTHING"
    | "SNOWPLOWING"
    | "GARDENING"
    | "BABYSITTING"
    | "OTHERCARE"
    | "OTHERCOSTS"
    | "SOLARCELLS"
    | "STORAGESELFPRODUCEDELECTRICITY"
    | "CHARGINGSTATIONELECTRICVEHICLE"
    | "HOMEMAINTENANCE"
    | "FURNISHING"
    | "TRANSPORTATIONSERVICES"
    | "WASHINGANDCAREOFCLOTHING"
  /** @format double */
  Price?: number
  /** @format double */
  PriceExcludingVAT?: number
  Project?: string
  /** @format int32 */
  RowId?: number
  StockPointCode?: string
  /** @format double */
  Total?: number
  /** @format double */
  TotalExcludingVAT?: number
  Unit?: string
  /** @format int32 */
  VAT?: number
}

export interface AssetTypeWrapList {
  MetaInformation?: MetaInformation
  Types?: AssetType[]
}

export interface AccountListItem {
  "@url"?: string
  Active?: boolean
  /** @format double */
  BalanceBroughtForward?: number
  CostCenter?: string
  CostCenterSettings?: "ALLOWED" | "MANDATORY" | "NOTALLOWED"
  /**
   * @minLength 1
   * @maxLength 200
   */
  Description: string
  /**
   * @format int32
   * @min 1000
   * @max 9999
   */
  Number: number
  Project?: string
  ProjectSettings?: "ALLOWED" | "MANDATORY" | "NOTALLOWED"
  /** @format int32 */
  SRU?: number
  /** @format int32 */
  Year?: number
  VATCode?: string
}

export interface InvoicePaymentWriteOff {
  /** @format double */
  Amount?: number
  /**
   * @format int32
   * @min 1000
   * @max 9999
   */
  AccountNumber?: number
  CostCenter?: string
  /**
   * @minLength 3
   * @maxLength 3
   */
  Currency?: string
  Description?: string
  TransactionInformation?: string
  Project?: string
}

export interface Offer {
  "@url"?: string
  "@urlTaxReductionList"?: string
  /** @format double */
  AdministrationFee?: number
  /** @format double */
  AdministrationFeeVAT?: number
  /**
   * @minLength 0
   * @maxLength 1024
   */
  Address1?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  Address2?: string
  /** @format double */
  BasisTaxReduction?: number
  Cancelled?: boolean
  /**
   * @minLength 0
   * @maxLength 1024
   */
  City?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  Comments?: string
  /** @format double */
  ContributionPercent?: number
  /** @format double */
  ContributionValue?: number
  CopyRemarks?: boolean
  Country?: string
  CostCenter?: string
  Currency?: string
  /** @format double */
  CurrencyRate?: number
  /** @format int32 */
  CurrencyUnit?: number
  CustomerName?: string
  CustomerNumber: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  DeliveryAddress1?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  DeliveryAddress2?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  DeliveryCity?: string
  DeliveryCountry?: string
  /** @format date */
  DeliveryDate?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  DeliveryName?: string
  DeliveryZipCode?: string
  DocumentNumber?: string
  EmailInformation?: OfferEmailInformation
  /** @format date */
  ExpireDate?: string
  /** @format double */
  Freight?: number
  /** @format double */
  FreightVAT?: number
  /** @format double */
  Gross?: number
  HouseWork?: boolean
  InvoiceReference?: string
  Labels?: OfferLabel[]
  Language?: string
  /** @format double */
  Net?: number
  NotCompleted?: boolean
  /** @format date */
  OfferDate?: string
  OfferRows?: OfferOfferRow[]
  OrderReference?: string
  OrganisationNumber?: string
  OurReference?: string
  Phone1?: string
  Phone2?: string
  PriceList?: string
  PrintTemplate?: string
  Project?: string
  Remarks?: string
  /** @format double */
  RoundOff?: number
  Sent?: boolean
  /** @format int32 */
  TaxReduction?: number
  TermsOfDelivery?: string
  TermsOfPayment?: string
  /** @format double */
  Total?: number
  /** @format double */
  TotalToPay?: number
  /** @format double */
  TotalVAT?: number
  VATIncluded?: boolean
  WayOfDelivery?: string
  YourReference?: string
  YourReferenceNumber?: string
  ZipCode?: string
  TaxReductionType?: "none" | "rot" | "rut" | "green"
}

export interface SupplierInvoiceListItem {
  "@url"?: string
  Balance?: string
  Booked?: boolean
  Cancel?: boolean
  CostCenter?: string
  Credit?: boolean
  Currency?: string
  CurrencyRate?: string
  /** @format double */
  CurrencyUnit?: number
  /** @format date */
  DueDate?: string
  ExternalInvoiceNumber?: string
  ExternalInvoiceSeries?: string
  GivenNumber?: string
  /** @format date */
  InvoiceDate?: string
  InvoiceNumber?: string
  Project?: string
  SupplierNumber: string
  SupplierName?: string
  Total?: string
  AuthorizerName?: string
  Vouchers?: SupplierInvoiceListItemVoucher[]
  /** @format date */
  FinalPayDate?: string
}

export interface ManualOutboundDocumentPatch {
  /**
   * @minLength 0
   * @maxLength 1000
   */
  note?: string
}

export interface CustomOutboundDocument {
  /**
   * @minLength 1
   * @maxLength 25
   * @pattern ^[0-9]+
   */
  id?: string
  /**
   * @minLength 1
   * @maxLength 25
   * @pattern [a-zA-Z0-9_-]+
   */
  referenceType?: string
  /** @format date */
  date: string
  /**
   * @minLength 0
   * @maxLength 1000
   */
  note?: string
  warehouseReady?: boolean
  voided?: boolean
  rows: CustomOutboundDocumentRow[]
  forcedDelivery?: boolean
  averageCosts?: AverageCost[]
  deliveryState: "registration" | "reservation" | "delivery"
}

export interface StockTakingRow {
  id?: string
  /** @format int64 */
  stockTakingId?: number
  /**
   * @minLength 0
   * @maxLength 50
   */
  itemId?: string
  /** @format uuid */
  stockPointId?: string
  /** @format uuid */
  stockLocationId?: string
  /**
   * @minLength 0
   * @maxLength 100
   */
  countedBy?: string
  stockTakenQuantity?: number
  totalQuantityInStock?: number
  /** @format int32 */
  currentRowNo?: number
  hasPostReleaseStockChanges?: boolean
  stockTakingRowId?: string
}

export interface VacationDebtBasisWrap {
  VacationDebtBasis?: VacationDebtBasis
}

export interface VacationDebtBasisEmployee {
  /**
   * @minLength 1
   * @maxLength 15
   */
  EmployeeId: string
  EmployeeName?: string
  /** @format double */
  DaysEarned?: number
  /** @format double */
  WageEarned?: number
  /** @format double */
  VariableEarned?: number
  /** @format double */
  DebtEarned?: number
  /** @format double */
  DaysUnused?: number
  /** @format double */
  WageUnused?: number
  /** @format double */
  VariableUnused?: number
  /** @format double */
  DebtUnused?: number
  /** @format double */
  DaysSaved?: number
  /** @format double */
  WageSaved?: number
  /** @format double */
  DebtSaved?: number
  /** @format double */
  DebtAdvance?: number
  /** @format double */
  TotalDebtEmployee?: number
  /** @format double */
  TotalDebtEmployerContribution?: number
}

export interface CustomerDefaultTemplates {
  CashInvoice?: string
  Invoice?: string
  Offer?: string
  Order?: string
}

export interface DepreciationResponse {
  "@url"?: string
  /** @format int32 */
  VoucherNumber?: number
  VoucherSeries?: string
  /** @format int32 */
  FinancialYear?: number
}

export interface ModeOfPaymentWrap {
  ModeOfPayment: ModeOfPayment
}

export interface SupplierInvoiceExternalURLConnection {
  Url?: string
  /** @format int32 */
  Id?: number
  /** @format int32 */
  SupplierInvoiceNumber?: number
  ExternalUrlConnection?: string
}

export interface AttendanceTransactionWrap {
  AttendanceTransaction?: AttendanceTransaction
}

export interface VoucherVoucherRow {
  /**
   * @format int32
   * @min 1000
   * @max 9999
   */
  Account: number
  CostCenter?: string
  /** @format double */
  Credit?: number
  Description?: string
  /** @format double */
  Debit?: number
  Project?: string
  Removed?: boolean
  /**
   * @minLength 0
   * @maxLength 100
   */
  TransactionInformation?: string
  /** @format double */
  Quantity?: number
}

export interface VoucherListItemList {
  Vouchers?: VoucherListItem[]
}

export interface InvoiceEmailInformation {
  EmailAddressFrom?: string
  EmailAddressTo?: string
  EmailAddressCC?: string
  EmailAddressBCC?: string
  /**
   * @minLength 0
   * @maxLength 100
   */
  EmailSubject?: string
  /**
   * @minLength 0
   * @maxLength 20000
   */
  EmailBody?: string
}

export interface AccountSingleItemOpeningQuantities {
  Project?: string
  /** @format int32 */
  Balance?: number
}

export interface PredefinedAccountList {
  PreDefinedAccounts?: PredefinedAccount[]
}

export interface PurchaseOrderMailSettings {
  receiver: string
  receiverCopy?: string
  receiverSecretCopy?: string
  subject: string
  body: string
  bodyAsHtml?: string
  replyTo: string
  senderName?: string
}

export interface InvoicePaymentWrap {
  InvoicePayment?: InvoicePayment
}

export interface WayOfDelivery {
  "@url"?: string
  /**
   * @minLength 1
   * @maxLength 50
   */
  Code: string
  /**
   * @minLength 0
   * @maxLength 100
   */
  Description?: string
  /**
   * @minLength 0
   * @maxLength 100
   */
  DescriptionEnglish?: string
}

export interface InvoiceAccrualInvoiceAccrualRow {
  /** @format int32 */
  Account?: number
  CostCenter?: string
  /** @format double */
  Credit?: number
  /** @format double */
  Debit?: number
  Project?: string
  TransactionInformation?: string
}

export interface EmployeeDatedSchedule {
  /**
   * @minLength 1
   * @maxLength 15
   */
  EmployeeId: string
  /** @format date */
  FirstDay: string
  ScheduleId?: string
}

export interface EUVatLimitRegulationWrap {
  EUVatLimitRegulation?: EUVatLimitRegulation
}

export interface SupplierInvoice {
  "@url"?: string
  AdministrationFee?: string
  Balance?: string
  Booked?: boolean
  Cancelled?: boolean
  /**
   * @minLength 0
   * @maxLength 1000
   */
  Comments?: string
  CostCenter?: string
  Credit?: boolean
  /** @format int32 */
  CreditReference?: number
  Currency?: string
  CurrencyRate?: string
  /** @format double */
  CurrencyUnit?: number
  DisablePaymentFile?: boolean
  /** @format date */
  DueDate?: string
  ExternalInvoiceNumber?: string
  ExternalInvoiceSeries?: string
  Freight?: string
  GivenNumber?: string
  /** @format date */
  InvoiceDate?: string
  /**
   * @minLength 0
   * @maxLength 64
   */
  InvoiceNumber?: string
  OCR?: string
  /**
   * @minLength 0
   * @maxLength 50
   */
  OurReference?: string
  PaymentPending?: boolean
  Project?: string
  RoundOffValue?: string
  SupplierInvoiceRows?: SupplierInvoiceSupplierInvoiceRow[]
  SupplierNumber: string
  SupplierName?: string
  Total?: string
  VAT?: string
  /**
   * @minLength 0
   * @maxLength 50
   */
  YourReference?: string
  /** @format int32 */
  VoucherNumber?: number
  VoucherSeries?: string
  /** @format int32 */
  VoucherYear?: number
  VATType?: "NORMAL" | "EUINTERNAL" | "REVERSE"
  SalesType?: "STOCK" | "SERVICE"
  AccountingMethod?: "ACCRUAL" | "CASH"
  Vouchers?: SupplierInvoiceVoucher[]
  /** @format date */
  FinalPayDate?: string
}

export interface CustomerReferenceWrap {
  CustomerReference?: CustomerReference
}

export interface OfferLabel {
  /** @format int32 */
  Id?: number
}

export interface ReportPaymentPayload {
  ClientTakesFees: boolean
  BookkeepPaymentInFortnox: boolean
  ReportToFinance: boolean
  /** @format float */
  PaymentAmount: number
  PaymentMethodCode: string
  PaymentMethodAccount: string
}

export interface VoucherFileConnection {
  "@url"?: string
  FileId: string
  VoucherDescription?: string
  VoucherNumber: string
  VoucherSeries: string
  /** @format int32 */
  VoucherYear?: number
}

export interface EmployeeDatedWage {
  /**
   * @minLength 1
   * @maxLength 15
   */
  EmployeeId: string
  /** @format date */
  FirstDay: string
  MonthlySalary?: string
  HourlyPay?: string
}

export interface OfferWrap {
  Offer?: Offer
}

export interface ArticleListItem {
  "@url"?: string
  /**
   * @minLength 0
   * @maxLength 50
   */
  ArticleNumber?: string
  /**
   * @minLength 1
   * @maxLength 200
   */
  Description: string
  DisposableQuantity?: string
  /**
   * @minLength 0
   * @maxLength 30
   */
  EAN?: string
  Housework?: boolean
  PurchasePrice?: string
  SalesPrice?: string
  /** @format double */
  QuantityInStock?: number
  ReservedQuantity?: string
  /**
   * @minLength 0
   * @maxLength 100
   */
  StockPlace?: string
  StockValue?: string
  Unit?: string
  VAT?: string
  WebshopArticle?: boolean
}

export interface AccountPayload {
  Active?: boolean
  /** @format double */
  BalanceBroughtForward?: number
  CostCenter?: string
  CostCenterSettings?: "ALLOWED" | "MANDATORY" | "NOTALLOWED"
  /**
   * @minLength 1
   * @maxLength 200
   */
  Description: string
  /**
   * @format int32
   * @min 1000
   * @max 9999
   */
  Number: number
  Project?: string
  ProjectSettings?: "ALLOWED" | "MANDATORY" | "NOTALLOWED"
  /** @format int32 */
  SRU?: number
  TransactionInformation?: string
  TransactionInformationSettings?: "ALLOWED" | "MANDATORY" | "NOTALLOWED"
  VATCode?: string
  OpeningQuantities?: AccountPayloadOpeningQuantities[]
}

export interface SupplierInvoiceExternalURLConnectionUpdate {
  /** @format int32 */
  SupplierInvoiceNumber?: number
  ExternalURLConnection?: string
}

export interface InvoicePayloadInvoiceRow {
  /**
   * @format int32
   * @min 1000
   * @max 9999
   */
  AccountNumber?: number
  ArticleNumber?: string
  CostCenter?: string
  DeliveredQuantity?: string
  Description?: string
  /** @format double */
  Discount?: number
  DiscountType?: "AMOUNT" | "PERCENT"
  HouseWork?: boolean
  /**
   * @format int32
   * @max 999
   */
  HouseWorkHoursToReport?: number
  HouseWorkType?:
    | "CONSTRUCTION"
    | "ELECTRICITY"
    | "GLASSMETALWORK"
    | "GROUNDDRAINAGEWORK"
    | "MASONRY"
    | "PAINTINGWALLPAPERING"
    | "HVAC"
    | "MAJORAPPLIANCEREPAIR"
    | "MOVINGSERVICES"
    | "ITSERVICES"
    | "CLEANING"
    | "TEXTILECLOTHING"
    | "SNOWPLOWING"
    | "GARDENING"
    | "BABYSITTING"
    | "OTHERCARE"
    | "OTHERCOSTS"
    | "SOLARCELLS"
    | "STORAGESELFPRODUCEDELECTRICITY"
    | "CHARGINGSTATIONELECTRICVEHICLE"
    | "HOMEMAINTENANCE"
    | "FURNISHING"
    | "TRANSPORTATIONSERVICES"
    | "WASHINGANDCAREOFCLOTHING"
  /** @format double */
  Price?: number
  Project?: string
  /** @format int32 */
  RowId?: number
  StockPointCode?: string
  Unit?: string
  /** @format int32 */
  VAT?: number
}

export interface InvoiceAccrual {
  "@url"?: string
  /**
   * @format int32
   * @min 1000
   * @max 9999
   */
  AccrualAccount: number
  Description: string
  /** @format date */
  EndDate: string
  /**
   * @maxItems 2147483647
   * @minItems 2
   */
  InvoiceAccrualRows: InvoiceAccrualInvoiceAccrualRow[]
  /** @format int32 */
  InvoiceNumber: number
  Period?:
    | "MONTHLY"
    | "BIMONTHLY"
    | "QUARTERLY"
    | "SEMIANNUALLY"
    | "ANNUALLY"
    | "1_MONTHS"
    | "2_MONTHS"
    | "3_MONTHS"
    | "6_MONTHS"
    | "12_MONTHS"
  /**
   * @format int32
   * @min 1000
   * @max 9999
   */
  RevenueAccount: number
  /** @format date */
  StartDate: string
  /** @format int32 */
  Times?: number
  /** @format double */
  Total: number
  VATIncluded?: boolean
}

export interface WriteDownWrap {
  Asset?: WriteDown
}

export interface VoucherSeriesListItem {
  "@url"?: string
  /**
   * @minLength 1
   * @maxLength 10
   */
  Code: string
  /**
   * @minLength 0
   * @maxLength 200
   */
  Description?: string
  Manual?: boolean
  /** @format int32 */
  Year?: number
  Approver?: VoucherSeriesListItemApprover
}

export interface SupplierListItem {
  "@url"?: string
  Active?: boolean
  Address1?: string
  Address2?: string
  BankAccountNumber?: string
  BG?: string
  BIC?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  City?: string
  CostCenter?: string
  /**
   * @minLength 0
   * @maxLength 2
   */
  CountryCode?: string
  /**
   * @minLength 0
   * @maxLength 3
   */
  Currency?: string
  DisablePaymentFile?: boolean
  Email?: string
  IBAN?: string
  /**
   * @minLength 1
   * @maxLength 1024
   */
  Name: string
  OrganisationNumber?: string
  PG?: string
  Phone?: string
  /**
   * @minLength 4
   * @maxLength 4
   */
  PreDefinedAccount?: string
  Project?: string
  SupplierNumber?: string
  TermsOfPayment?: string
  ZipCode?: string
}

export interface SupplierInvoiceVoucher {
  /** @format int32 */
  Number?: number
  /** @format int32 */
  Year?: number
  Series?: string
  ReferenceType?: string
}

export interface VacationDebtBasis {
  /** @format int32 */
  Year: number
  /** @format int32 */
  Month: number
  /** @format date */
  LastDay?: string
  /** @format int32 */
  VoucherNumber?: number
  VoucherSeries?: string
  /** @format int32 */
  VoucherYear?: number
  Employees?: VacationDebtBasisEmployee[]
}

export interface SupplierInvoiceListItemVoucher {
  /** @format int32 */
  Number?: number
  /** @format int32 */
  Year?: number
  Series?: string
  ReferenceType?: string
}

export interface OfferListItem {
  "@url"?: string
  Cancelled?: boolean
  Currency?: string
  CustomerName?: string
  CustomerNumber: string
  DocumentNumber?: string
  /** @format date */
  OfferDate?: string
  Project?: string
  Sent?: boolean
  /** @format double */
  Total?: number
}

export interface DepreciationWrap {
  Asset?: Depreciation
}

export interface OrderWrap {
  Order?: Order
}

export interface Invoice {
  "@url"?: string
  "@urlTaxReductionList"?: string
  /** @format double */
  AdministrationFee?: number
  /** @format double */
  AdministrationFeeVAT?: number
  Address1?: string
  Address2?: string
  /** @format double */
  Balance?: number
  /** @format double */
  BasisTaxReduction?: number
  Booked?: boolean
  Cancelled?: boolean
  /**
   * @minLength 0
   * @maxLength 1024
   */
  City?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  Comments?: string
  /** @format int32 */
  ContractReference?: number
  /** @format double */
  ContributionPercent?: number
  /** @format double */
  ContributionValue?: number
  Country?: string
  CostCenter?: string
  Credit?: string
  CreditInvoiceReference?: string
  Currency?: string
  /** @format double */
  CurrencyRate?: number
  /** @format int32 */
  CurrencyUnit?: number
  CustomerName?: string
  CustomerNumber: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  DeliveryAddress1?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  DeliveryAddress2?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  DeliveryCity?: string
  DeliveryCountry?: string
  /** @format date */
  DeliveryDate?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  DeliveryName?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  DeliveryZipCode?: string
  DocumentNumber?: string
  /** @format date */
  DueDate?: string
  EDIInformation?: InvoiceEDIInformation
  EmailInformation?: InvoiceEmailInformation
  EUQuarterlyReport?: boolean
  /**
   * @minLength 0
   * @maxLength 80
   */
  ExternalInvoiceReference1?: string
  /**
   * @minLength 0
   * @maxLength 80
   */
  ExternalInvoiceReference2?: string
  /** @format double */
  Freight?: number
  /** @format double */
  FreightVAT?: number
  /** @format double */
  Gross?: number
  HouseWork?: boolean
  /** @format date */
  InvoiceDate?: string
  /** @format date */
  InvoicePeriodStart?: string
  /** @format date */
  InvoicePeriodEnd?: string
  InvoicePeriodReference?: string
  InvoiceRows?: InvoiceInvoiceRow[]
  InvoiceType?: "INVOICE" | "AGREEMENTINVOICE" | "INTRESTINVOICE" | "SUMMARYINVOICE" | "CASHINVOICE"
  Labels?: InvoiceLabel[]
  Language?: "SV" | "EN"
  /** @format date */
  LastRemindDate?: string
  /** @format double */
  Net?: number
  NotCompleted?: boolean
  NoxFinans?: boolean
  OCR?: string
  OfferReference?: string
  OrderReference?: string
  OrganisationNumber?: string
  /**
   * @minLength 0
   * @maxLength 50
   */
  OurReference?: string
  PaymentWay?: "CASH" | "CARD" | "AG"
  /**
   * @minLength 0
   * @maxLength 1024
   */
  Phone1?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  Phone2?: string
  PriceList?: string
  PrintTemplate?: string
  Project?: string
  WarehouseReady?: boolean
  /** @format date */
  OutboundDate?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  Remarks?: string
  /** @format int32 */
  Reminders?: number
  /** @format double */
  RoundOff?: number
  Sent?: boolean
  /** @format int32 */
  TaxReduction?: number
  TermsOfDelivery?: string
  TermsOfPayment?: string
  /** @format int32 */
  TimeBasisReference?: number
  /** @format double */
  Total?: number
  /** @format double */
  TotalToPay?: number
  /** @format double */
  TotalVAT?: number
  VATIncluded?: boolean
  /** @format int32 */
  VoucherNumber?: number
  VoucherSeries?: string
  /** @format int32 */
  VoucherYear?: number
  WayOfDelivery?: string
  /**
   * @minLength 0
   * @maxLength 75
   */
  YourOrderNumber?: string
  /**
   * @minLength 0
   * @maxLength 50
   */
  YourReference?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  ZipCode?: string
  AccountingMethod?: "ACCRUAL" | "CASH"
  TaxReductionType?: "none" | "rot" | "rut" | "green"
  /** @format date */
  FinalPayDate?: string
}

export interface RegistrationCode {
  /**
   * @minLength 3
   * @maxLength 3
   */
  code: string
  name?: string
  /** @format float */
  priceMultiplier?: number
  /** @format float */
  costMultiplier?: number
  type: "WORK" | "ABSENCE"
  active?: boolean
  id?: string
}

export interface OrderEmailInformation {
  EmailAddressFrom?: string
  EmailAddressTo?: string
  EmailAddressCC?: string
  EmailAddressBCC?: string
  EmailSubject?: string
  EmailBody?: string
}

export interface AbsenceTransactionSingleItemWrap {
  AbsenceTransaction?: AbsenceTransactionSingleItem
}

export interface SupplierWrap {
  Supplier?: Supplier
}

export interface CustomOutboundDocumentRow {
  /**
   * @format int64
   * @min 1
   */
  rowId?: number
  /**
   * @minLength 1
   * @maxLength 50
   */
  itemId: string
  reservedQuantity?: number
  deliveredQuantity?: number
  /** @format uuid */
  stockPointId?: string
  /** @format uuid */
  stockLocationId?: string
  /**
   * @minLength 1
   * @maxLength 25
   */
  costCenterCode?: string
  /**
   * @minLength 1
   * @maxLength 25
   */
  projectId?: string
  /**
   * @minLength 0
   * @maxLength 200
   */
  itemDescription?: string
  /**
   * @minLength 0
   * @maxLength 50
   */
  itemUnit?: string
  forcedQuantity?: number
  quantity: number
}

export interface ManualInboundDocumentPatch {
  /**
   * @minLength 0
   * @maxLength 1000
   */
  note?: string
}

export interface AccountPayloadWrap {
  Account?: AccountPayload
}

export interface EUVatLimitRegulation {
  /** @format double */
  TotalExclVat?: number
  IsOverLimit?: boolean
  /** @format int32 */
  Limit?: number
  Year?: string
}

export interface ContractListItem {
  "@url"?: string
  Continuous?: boolean
  /** @format int32 */
  ContractLength?: number
  Currency?: string
  CustomerName?: string
  CustomerNumber: string
  DocumentNumber?: string
  /** @format int32 */
  Invoiceinterval?: number
  /** @format int32 */
  InvoicesRemaining?: number
  LastInvoiceDate?: string
  /** @format date */
  PeriodStart?: string
  /** @format date */
  PeriodEnd: string
  Status?: string
  /** @format int32 */
  TemplateNumber?: number
  /** @format double */
  Total?: number
}

export interface ArticleFileConnection {
  "@url"?: string
  FileId: string
  ArticleNumber: string
}

export interface FinancialYear {
  "@url"?: string
  /** @format int32 */
  Id?: number
  /** @format date */
  FromDate: string
  /** @format date */
  ToDate: string
  AccountingMethod?: "ACCRUAL" | "CASH"
  accountCharts?: string
}

export interface AssetFileConnectionResponse {
  AssetFileConnections?: AssetFileConnection[]
  MetaInformation?: MetaInformation
}

export interface Expense {
  Code: string
  Text: string
  /** @format int32 */
  Account: number
}

export interface CustomerReferenceCustomerReferenceRow {
  Reference?: string
  CustomerNumber?: string
  /** @format int32 */
  Id?: number
}

export interface SupplierInvoiceAccrualWrap {
  SupplierInvoiceAccrual: SupplierInvoiceAccrual
}

export interface Asset {
  "@url"?: string
  /** @format int32 */
  Id?: number
  Number?: string
  Description?: string
  Status?: string
  StatusId?: string
  CostCenter?: string
  Project?: string
  Type?: string
  /** @format int32 */
  TypeId?: number
  /** @format int32 */
  DepreciationMethod?: number
  /** @format int32 */
  AcquisitionValue?: number
  /** @format int32 */
  DepreciateToResidualValue?: number
  AcquisitionDate?: string
  AcquisitionStart?: string
  DepreciationFinal?: string
  DepreciatedTo?: string
  /** @format int32 */
  ManualOb?: number
  Notes?: string
  Reference?: string
  Brand?: string
  InsuredNumber?: string
  InsuredWith?: string
  Group?: string
  Room?: string
  Placement?: string
  Department?: string
  History?: History[]
}

export interface UnitWrap {
  Unit: Unit
}

export interface CustomerDefaultDeliveryTypes {
  Invoice?: "PRINT" | "EMAIL" | "PRINTSERVICE"
  Order?: "PRINT" | "EMAIL" | "PRINTSERVICE"
  Offer?: "PRINT" | "EMAIL" | "PRINTSERVICE"
}

export interface PriceListWrap {
  PriceList: PriceList
}

export interface ManualInboundDocumentRow {
  /** @format int64 */
  rowId?: number
  /**
   * @minLength 1
   * @maxLength 50
   */
  itemId: string
  itemDescription?: string
  itemUnit?: string
  /**
   * @min 0.01
   * @exclusiveMin false
   */
  quantity: number
  /**
   * @min 0
   * @exclusiveMin false
   */
  directCost?: number
  /**
   * @min 0
   * @exclusiveMin false
   */
  freightCost?: number
  /**
   * @min 0
   * @exclusiveMin false
   */
  otherCost?: number
  /**
   * @minLength 0
   * @maxLength 50
   */
  batch?: string
  /** @format uuid */
  stockPointId?: string
  /** @format uuid */
  stockLocationId?: string
  stockPointCode?: string
  stockPointName?: string
  stockLocationCode?: string
  stockLocationName?: string
  costCenterCode?: string
  projectId?: string
}

export interface ProductionOrder {
  /** @format int64 */
  id?: number
  itemId?: string
  /** @format date */
  startDate: string
  /** @format date */
  productionDate?: string
  costCenterCode?: string
  projectId?: string
  /**
   * @minLength 0
   * @maxLength 1000
   */
  note?: string
  /**
   * @min 0.01
   * @exclusiveMin false
   */
  quantity: number
  batch?: string
  productionState: "registered" | "reserved" | "ongoing"
  documentState?: "completed" | "voided"
  itemDescription?: string
  itemUnit?: string
  /** @format uuid */
  inboundStockPointId?: string
  /** @format uuid */
  inboundStockLocationId?: string
  /** @format uuid */
  outboundStockPointId?: string
  packageItems?: PackageItem[]
}

export interface LabelList {
  Labels?: Label[]
}

export interface AttendanceTransactionListItemList {
  AttendanceTransactions?: AttendanceTransactionListItem[]
}

export interface ScheduleTimeWrap {
  ScheduleTime?: ScheduleTime
}

export interface CompanySettingsWrap {
  CompanySettings?: CompanySettings
}

export interface ExpenseWrap {
  Expense?: Expense
}

export interface PredefinedAccount {
  "@url"?: string
  Name?: string
  /**
   * @format int32
   * @min 1000
   * @max 9999
   */
  Account: number
}

export interface ScheduleTime {
  EmployeeId?: string
  /** @format date */
  Date?: string
  ScheduleId?: string
  Hours?: string
  IWH1?: string
  IWH2?: string
  IWH3?: string
  IWH4?: string
  IWH5?: string
}

export interface AttendanceTransaction {
  /**
   * @minLength 1
   * @maxLength 15
   */
  EmployeeId: string
  /**
   * @minLength 3
   * @maxLength 3
   */
  CauseCode:
    | "ARB"
    | "BE2"
    | "BER"
    | "FLX"
    | "HLG"
    | "JO2"
    | "JOR"
    | "MER"
    | "OB1"
    | "OB2"
    | "OB3"
    | "OB4"
    | "OB5"
    | "OK0"
    | "OK1"
    | "OK2"
    | "OK3"
    | "OK4"
    | "OK5"
    | "OT1"
    | "OT2"
    | "OT3"
    | "OT4"
    | "OT5"
    | "RES"
    | "TID"
  /** @format date */
  Date: string
  Hours?: string
  CostCenter?: string
  Project?: string
}

export interface SupplierInvoiceAccrualListItem {
  "@url"?: string
  Description?: string
  /** @format int32 */
  SupplierInvoiceNumber?: number
  Period:
    | "MONTHLY"
    | "BIMONTHLY"
    | "QUARTERLY"
    | "SEMIANNUALLY"
    | "ANNUALLY"
    | "1_MONTHS"
    | "2_MONTHS"
    | "3_MONTHS"
    | "6_MONTHS"
    | "12_MONTHS"
}

export interface SupplierInvoiceWrap {
  SupplierInvoice?: SupplierInvoice
}

export interface Contract {
  "@url"?: string
  "@urlTaxReductionList"?: string
  Active?: boolean
  /** @format double */
  AdministrationFee?: number
  /** @format double */
  BasisTaxReduction?: number
  /**
   * @minLength 0
   * @maxLength 1024
   */
  Comments?: string
  Continuous?: boolean
  /** @format date */
  ContractDate?: string
  /** @format int32 */
  ContractLength?: number
  /** @format double */
  ContributionPercent?: number
  /** @format double */
  ContributionValue?: number
  CostCenter?: string
  Currency?: string
  CustomerName?: string
  CustomerNumber: string
  DocumentNumber?: string
  EmailInformation?: ContractEmailInformation
  ExternalInvoiceReference1?: string
  ExternalInvoiceReference2?: string
  /** @format double */
  Freight?: number
  /** @format double */
  Gross?: number
  HouseWork?: boolean
  /** @format double */
  InvoiceDiscount?: number
  /** @format int32 */
  InvoiceInterval?: number
  InvoicesRemaining?: string
  InvoiceRows: ContractInvoiceRow[]
  Language?: "SV" | "EN"
  LastInvoiceDate?: string
  /** @format double */
  Net?: number
  /**
   * @minLength 0
   * @maxLength 25
   */
  OurReference?: string
  /** @format date */
  PeriodEnd: string
  /** @format date */
  PeriodStart?: string
  PriceList?: string
  PrintTemplate?: string
  Project?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  Remarks?: string
  /** @format double */
  RoundOff?: number
  /** @format double */
  TaxReduction?: number
  TemplateName?: string
  /** @format int32 */
  TemplateNumber?: number
  TermsOfDelivery?: string
  TermsOfPayment?: string
  /** @format double */
  Total?: number
  /** @format double */
  TotalToPay?: number
  /** @format double */
  TotalVAT?: number
  VatIncluded?: boolean
  WayOfDelivery?: string
  /**
   * @minLength 0
   * @maxLength 75
   */
  YourOrderNumber?: string
  YourReference?: string
  TaxReductionType?: "none" | "rot" | "rut" | "green"
}

export interface OfferListItemList {
  Offers?: OfferListItem[]
}

export interface ManualDocument {
  entityId?: string
  /** @format int64 */
  deliveryId?: number
  /** @format date */
  date?: string
  type?: "Inbound" | "Outbound" | "StockTransfer"
  released?: boolean
  voided?: boolean
  note?: string
}

export interface InvoiceAccrualListItem {
  "@url"?: string
  Description: string
  /** @format int32 */
  InvoiceNumber: number
  Period?:
    | "MONTHLY"
    | "BIMONTHLY"
    | "QUARTERLY"
    | "SEMIANNUALLY"
    | "ANNUALLY"
    | "1_MONTHS"
    | "2_MONTHS"
    | "3_MONTHS"
    | "6_MONTHS"
    | "12_MONTHS"
}

export interface SalaryTransactionWrap {
  SalaryTransaction: SalaryTransaction
}

export interface UnitList {
  Units?: Unit[]
}

export interface SupplierInvoicePaymentWrap {
  SupplierInvoicePayment?: SupplierInvoicePayment
}

export interface ModeOfPayment {
  "@url"?: string
  Code?: string
  Description?: string
  /**
   * @minLength 4
   * @maxLength 4
   */
  AccountNumber: string
}

export interface Article {
  "@url"?: string
  /**
   * @minLength 0
   * @maxLength 50
   */
  ArticleNumber?: string
  Bulky?: boolean
  /**
   * @format int32
   * @min 1000
   * @max 99999
   */
  ConstructionAccount?: number
  /**
   * @format int32
   * @min 0
   * @max 999999999
   */
  Depth?: number
  /**
   * @minLength 1
   * @maxLength 200
   */
  Description: string
  /** @format double */
  DisposableQuantity?: number
  /**
   * @minLength 0
   * @maxLength 30
   */
  EAN?: string
  /**
   * @format int32
   * @min 1000
   * @max 99999
   */
  EUAccount?: number
  /**
   * @format int32
   * @min 1000
   * @max 99999
   */
  EUVATAccount?: number
  /**
   * @format int32
   * @min 1000
   * @max 99999
   */
  ExportAccount?: number
  /**
   * @format int32
   * @min 0
   * @max 999999999
   */
  Height?: number
  Housework?: boolean
  HouseworkType?:
    | "CONSTRUCTION"
    | "ELECTRICITY"
    | "GLASSMETALWORK"
    | "GROUNDDRAINAGEWORK"
    | "MASONRY"
    | "PAINTINGWALLPAPERING"
    | "HVAC"
    | "CLEANING"
    | "TEXTILECLOTHING"
    | "COOKING"
    | "SNOWPLOWING"
    | "GARDENING"
    | "BABYSITTING"
    | "OTHERCARE"
    | "TUTORING"
    | "OTHERCOSTS"
  Active?: boolean
  /**
   * @minLength 0
   * @maxLength 50
   */
  Manufacturer?: string
  /**
   * @minLength 0
   * @maxLength 50
   */
  ManufacturerArticleNumber?: string
  /**
   * @minLength 0
   * @maxLength 10000
   */
  Note?: string
  /**
   * @format int32
   * @min 1000
   * @max 99999
   */
  PurchaseAccount?: number
  /** @format double */
  PurchasePrice?: number
  /** @format double */
  QuantityInStock?: number
  /** @format double */
  ReservedQuantity?: number
  /**
   * @format int32
   * @min 1000
   * @max 99999
   */
  SalesAccount?: number
  StockGoods?: boolean
  /**
   * @minLength 0
   * @maxLength 100
   */
  StockPlace?: string
  /** @format double */
  StockValue?: number
  /** @format double */
  StockWarning?: number
  SupplierName?: string
  SupplierNumber?: string
  Type?: "STOCK" | "SERVICE"
  Unit?: string
  /** @format double */
  VAT?: number
  WebshopArticle?: boolean
  /**
   * @format int32
   * @min 0
   * @max 999999999
   */
  Weight?: number
  /**
   * @format int32
   * @min 0
   * @max 999999999
   */
  Width?: number
  Expired?: boolean
  /** @format double */
  SalesPrice?: number
  CostCalculationMethod?: string
  /** @format int32 */
  StockAccount?: number
  /** @format int32 */
  StockChangeAccount?: number
  /** @format double */
  DirectCost?: number
  /** @format double */
  FreightCost?: number
  /** @format double */
  OtherCost?: number
  DefaultStockPoint?: string
  DefaultStockLocation?: string
}

export interface TaxReduction {
  "@url"?: string
  /** @format double */
  ApprovedAmount?: number
  /**
   * @format double
   * @min 1
   */
  AskedAmount: number
  /** @format double */
  BilledAmount?: number
  /**
   * @minLength 1
   * @maxLength 2147483647
   */
  CustomerName: string
  /** @format int32 */
  Id?: number
  PropertyDesignation?: string
  ReferenceDocumentType: "OFFER" | "ORDER" | "INVOICE"
  ReferenceNumber: string
  RequestSent?: boolean
  ResidenceAssociationOrganisationNumber?: string
  /**
   * @minLength 10
   * @maxLength 13
   */
  SocialSecurityNumber: string
  /** @format int32 */
  VoucherNumber?: number
  VoucherSeries?: string
  /** @format int32 */
  VoucherYear?: number
  TaxReductionAmounts?: TaxReductionTaxReductionAmount[]
}

export interface FolderFileRowWrap {
  File?: FolderFileRow
}

export interface IncomingGoodsListRow {
  /** @format int64 */
  id?: number
  hasDeliveryNote?: boolean
  deliveryNoteId?: string
  supplierNumber?: string
  /** @format date */
  date?: string
  note?: string
  voided?: boolean
  completed?: boolean
  released?: boolean
  /** @format uuid */
  stockPointId?: string
  supplierName?: string
  unmatchedValue?: number
}

export interface InvoiceLabel {
  /** @format int32 */
  Id?: number
}

export interface SupplierInvoicePayment {
  "@url"?: string
  /** @format double */
  Amount?: number
  /** @format double */
  AmountCurrency?: number
  Booked?: boolean
  /**
   * @minLength 3
   * @maxLength 3
   */
  Currency?: string
  /** @format double */
  CurrencyRate?: number
  /** @format double */
  CurrencyUnit?: number
  Information?: string
  InvoiceNumber: string
  /** @format date */
  InvoiceDueDate?: string
  InvoiceOCR?: string
  InvoiceSupplierName?: string
  InvoiceSupplierNumber?: string
  InvoiceTotal?: string
  ModeOfPayment?: string
  /** @format int32 */
  Number?: number
  /** @format date */
  PaymentDate?: string
  Source?: "manual" | "direct"
  /** @format int32 */
  VoucherNumber?: number
  VoucherSeries?: string
  /** @format int32 */
  VoucherYear?: number
  WriteOffs?: SupplierInvoicePaymentWriteOff[]
}

export interface TRItem {
  /**
   * @minLength 0
   * @maxLength 40
   */
  id?: string
  /**
   * @minLength 0
   * @maxLength 255
   */
  description?: string
  active?: boolean
  purchasePrice?: number
  salesPrices?: TRItemPrice[]
  type?: "SERVICE" | "STOCK"
  unit?: string
  isStock?: boolean
}

export interface Folder {
  "@url"?: string
  Email?: string
  Files?: FolderFileRow[]
  Folders?: FolderFolderRow[]
  Id?: string
  Name?: string
}

export interface ManualOutboundDocumentRow {
  /**
   * @minLength 1
   * @maxLength 50
   */
  itemId: string
  itemDescription?: string
  itemUnit?: string
  /**
   * @min 0.01
   * @exclusiveMin false
   */
  quantity: number
  deliveredQuantity?: number
  /** @format uuid */
  stockPointId?: string
  stockPointCode?: string
  stockPointName?: string
  /** @format uuid */
  stockLocationId?: string
  stockLocationCode?: string
  stockLocationName?: string
  costCenterCode?: string
  projectId?: string
  forcedQuantity?: number
}

export interface OrderOrderRow {
  /** @format int32 */
  AccountNumber?: number
  ArticleNumber?: string
  ContributionPercent?: string
  ContributionValue?: string
  CostCenter?: string
  DeliveredQuantity?: string
  Description?: string
  /** @format double */
  Discount?: number
  DiscountType?: "AMOUNT" | "PERCENT"
  HouseWork?: boolean
  /** @format int32 */
  HouseWorkHoursToReport?: number
  HouseWorkType?:
    | "CONSTRUCTION"
    | "ELECTRICITY"
    | "GLASSMETALWORK"
    | "GROUNDDRAINAGEWORK"
    | "MASONRY"
    | "PAINTINGWALLPAPERING"
    | "MOVINGSERVICES"
    | "ITSERVICES"
    | "CLEANING"
    | "TEXTILECLOTHING"
    | "SNOWPLOWING"
    | "GARDENING"
    | "BABYSITTING"
    | "OTHERCARE"
    | "OTHERCOSTS"
  OrderedQuantity?: string
  /** @format double */
  Price?: number
  Project?: string
  ReservedQuantity?: string
  /** @format int32 */
  RowId?: number
  StockPointCode?: string
  StockPointId?: string
  /** @format double */
  Total?: number
  Unit?: string
  /** @format double */
  VAT?: number
}

export interface TermsOfDeliveryList {
  TermsOfDeliveries?: TermsOfDelivery[]
}

export interface VoucherSeriesListItemList {
  VoucherSeriesCollection?: VoucherSeriesListItem[]
}

export interface WayOfDeliveryWrap {
  WayOfDelivery?: WayOfDelivery
}

export interface Sell {
  /** @format int32 */
  Percentage?: number
  /** @format int32 */
  Price?: number
  Comment?: string
  Date?: string
}

export interface CompanyInfoWrap {
  CompanyInformation?: CompanyInfo
}

export interface Supplier {
  "@url"?: string
  Active?: boolean
  Address1?: string
  Address2?: string
  Bank?: string
  BankAccountNumber?: string
  BG?: string
  BIC?: string
  BranchCode?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  City?: string
  ClearingNumber?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  Comments?: string
  CostCenter?: string
  Country?: string
  /**
   * @minLength 0
   * @maxLength 2
   */
  CountryCode?: string
  /**
   * @minLength 0
   * @maxLength 3
   */
  Currency?: string
  DisablePaymentFile?: boolean
  Email?: string
  Fax?: string
  IBAN?: string
  /**
   * @minLength 1
   * @maxLength 1024
   */
  Name: string
  OrganisationNumber?: string
  OurReference?: string
  OurCustomerNumber?: string
  PG?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  Phone1?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  Phone2?: string
  /**
   * @minLength 4
   * @maxLength 4
   */
  PreDefinedAccount?: string
  Project?: string
  SupplierNumber?: string
  TermsOfPayment?: string
  VATNumber?: string
  VATType?: string
  VisitingAddress?: string
  VisitingCity?: string
  VisitingCountry?: string
  VisitingCountryCode?: string
  VisitingZipCode?: string
  WorkPlace?: string
  WWW?: string
  YourReference?: string
  ZipCode?: string
}

export interface AssetSingle {
  Assets?: Asset
}

export interface AbsenceTransactionListItem {
  "@url"?: string
  /** @format uuid */
  id?: string
  /**
   * @minLength 1
   * @maxLength 15
   */
  EmployeeId: string
  /**
   * @minLength 3
   * @maxLength 3
   */
  CauseCode:
    | "ASK"
    | "FPE"
    | "FRA"
    | "HAV"
    | "KOM"
    | "MIL"
    | "NAR"
    | "OS1"
    | "OS2"
    | "OS3"
    | "OS4"
    | "OS5"
    | "PAP"
    | "PEM"
    | "PER"
    | "SEM"
    | "SJK"
    | "SMB"
    | "SVE"
    | "TJL"
    | "UTB"
    | "VAB"
  /** @format date */
  Date: string
  /** @format float */
  Extent?: number
  /** @format float */
  Hours?: number
  HolidayEntitling?: boolean
  CostCenter?: string
  Project?: string
}

export interface ExpenseListItemWrap {
  Expenses?: ExpenseListItem[]
}

export interface ContractTemplateWrap {
  ContractTemplate?: ContractTemplate
}

export interface StockTransferRow {
  /**
   * @minLength 1
   * @maxLength 50
   */
  itemId: string
  itemDescription?: string
  itemUnit?: string
  quantity?: number
  /**
   * @min 0.01
   * @exclusiveMin false
   */
  requestedQuantity: number
  /** @format uuid */
  fromStockPointId: string
  fromStockPointCode?: string
  fromStockPointName?: string
  /** @format uuid */
  fromStockLocationId?: string
  fromStockLocationCode?: string
  fromStockLocationName?: string
  /** @format uuid */
  toStockPointId: string
  toStockPointCode?: string
  toStockPointName?: string
  /** @format uuid */
  toStockLocationId?: string
  toStockLocationCode?: string
  toStockLocationName?: string
  /** @format int64 */
  rowNum?: number
}

export interface CreateAsset {
  Number?: string
  Description?: string
  Notes?: string
  /** @format int32 */
  Type?: number
  /** @format int32 */
  AccountAssetId?: number
  /** @format int32 */
  AccountDepreciationId?: number
  /** @format int32 */
  AccountValueLossId?: number
}

export interface PredefinedVoucherSeriesList {
  PreDefinedVoucherSeriesCollection?: PredefinedVoucherSeries[]
}

export interface PurchaseOrderRow {
  /** @format uuid */
  id?: string
  /** @format int64 */
  purchaseOrderId?: number
  /**
   * @minLength 1
   * @maxLength 50
   */
  itemId: string
  /**
   * @min 0
   * @exclusiveMin false
   */
  orderedQuantity: number
  itemDescription?: string
  itemUnit?: string
  /** @format int64 */
  rowNum?: number
  /**
   * @minLength 0
   * @maxLength 25
   */
  projectId?: string
  /**
   * @minLength 0
   * @maxLength 25
   */
  costCenterCode?: string
  /**
   * @min 0
   * @exclusiveMin false
   */
  remainingOrderedQuantity: number
  /**
   * @minLength 3
   * @maxLength 3
   */
  currencyCode: string
  /**
   * @min 0
   * @exclusiveMin false
   */
  price?: number
  receivedQuantity?: number
  backOrderQuantity?: number
  /** @format uuid */
  stockPointId?: string
  /** @format uuid */
  stockLocationId?: string
  stockPointCode?: string
  stockPointName?: string
  stockLocationCode?: string
  stockLocationName?: string
  isStockItem?: boolean
  notes?: PurchaseOrderRowNote[]
}

export interface InvoiceEDIInformation {
  /**
   * @minLength 0
   * @maxLength 13
   */
  EDIGlobalLocationNumber?: string
  /**
   * @minLength 0
   * @maxLength 13
   */
  EDIGlobalLocationNumberDelivery?: string
  EDIInvoiceExtra1?: string
  EDIInvoiceExtra2?: string
  EDIOurElectronicReference?: string
  EDIYourElectronicReference?: string
  EDIStatus?: string
}

export interface InvoiceAccrualListItemList {
  InvoiceAccruals?: InvoiceAccrualListItem[]
}

export interface IncomingGoodsRow {
  /**
   * @minLength 1
   * @maxLength 50
   */
  itemId: string
  /**
   * @min 0
   * @exclusiveMin false
   */
  receivedQuantity: number
  /**
   * @min 0
   * @exclusiveMin false
   */
  backOrderQuantity: number
  /** @format uuid */
  id?: string
  itemDescription?: string
  /** @format uuid */
  stockPointId?: string
  stockPointCode?: string
  stockPointName?: string
  /** @format uuid */
  stockLocationId?: string
  stockLocationCode?: string
  stockLocationName?: string
  /**
   * @min 0
   * @exclusiveMin false
   */
  takenQuantity: number
  costCenterCode?: string
  projectId?: string
  /**
   * @min 0
   * @exclusiveMin false
   */
  invoicedQuantity: number
  itemUnit?: string
  /** @format int64 */
  purchaseOrderId?: number
  /**
   * @min 0
   * @exclusiveMin false
   */
  orderedQuantity: number
  /** @format uuid */
  purchaseOrderRowId?: string
  /** @format int32 */
  rowOrder?: number
  /**
   * @minLength 0
   * @maxLength 50
   */
  batch?: string
  isStockItem?: boolean
  remainingOrderedQuantity?: number
  directCost?: number
}

export interface ContractTemplateListItem {
  "@url"?: string
  /**
   * @format int32
   * @min 1
   * @max 9999
   */
  ContractLength?: number
  /** @format int32 */
  ContractTemplate?: number
  ContractTemplateName?: string
  /**
   * @format int32
   * @min 1
   * @max 9999
   */
  InvoiceInterval?: number
}

export interface Scrap {
  /** @format int32 */
  Percentage?: number
  Comment?: string
  Date?: string
}

export interface VoucherSeriesApprover {
  /** @format int32 */
  Id?: number
  Name?: string
}

export interface DepreciationResponseWrap {
  AssetsDepreciation?: DepreciationResponse[]
}

export interface ContractAccrualListItem {
  "@url"?: string
  Description: string
  /** @format int32 */
  DocumentNumber: number
  Period?: "MONTHLY" | "BIMONTHLY" | "QUARTERLY" | "SEMIANNUALLY" | "ANNUALLY"
}

export interface PurchaseOrder {
  /** @format date */
  deliveryDate?: string
  /**
   * @minLength 0
   * @maxLength 1000
   */
  note?: string
  /**
   * @minLength 0
   * @maxLength 50
   */
  internalReference?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  supplierName?: string
  /**
   * @minLength 0
   * @maxLength 1000
   */
  messageToSupplier?: string
  /** @format int64 */
  id?: number
  /** @format date */
  orderDate: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  supplierNumber: string
  rows?: PurchaseOrderRow[]
  /** @format uuid */
  stockPointId?: string
  /**
   * @minLength 1
   * @maxLength 50
   */
  deliveryName: string
  /**
   * @minLength 1
   * @maxLength 1024
   */
  deliveryAddress: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  deliveryAddress2?: string
  /**
   * @minLength 1
   * @maxLength 10
   */
  deliveryZipCode: string
  /**
   * @minLength 1
   * @maxLength 50
   */
  deliveryCity: string
  /**
   * @minLength 0
   * @maxLength 3
   */
  deliveryCountryCode?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  supplierAddress?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  supplierAddress2?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  supplierPostCode?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  supplierCity?: string
  /**
   * @minLength 0
   * @maxLength 3
   */
  supplierCountryCode?: string
  /**
   * @minLength 0
   * @maxLength 20
   */
  paymentTermsCode: string
  /**
   * @minLength 0
   * @maxLength 3
   */
  languageCode?: string
  /**
   * @minLength 0
   * @maxLength 3
   */
  currencyCode: string
  /**
   * @minLength 0
   * @maxLength 50
   */
  ourReference?: string
  /**
   * @minLength 0
   * @maxLength 50
   */
  yourReference?: string
  /**
   * @minLength 0
   * @maxLength 100
   */
  confirmationEmail?: string
  /**
   * @minLength 0
   * @maxLength 25
   */
  projectId?: string
  /**
   * @minLength 0
   * @maxLength 25
   */
  costCenterCode?: string
  stockPointCode?: string
  totalReceivedQuantity?: number
  voided?: boolean
  responseState?:
    | "NOT_SENT"
    | "SENT"
    | "ACCEPTED_WITH_REQ_DLV_DATE"
    | "ACCEPTED_WITH_CHANGED_DLV_DATE"
    | "PARTLY_ACCEPTED_WITH_REQ_DLV_DATE"
    | "PARTLY_ACCEPTED_WITH_CHANGED_DLV_DATE"
    | "REJECTED"
  purchaseOrderState?:
    | "NOT_SENT"
    | "SENT"
    | "SENT_NOT_REJECTED"
    | "DELAYED"
    | "RECEIVED"
    | "VOIDED"
    | "CURRENT"
    | "ALL"
  /**
   * @minLength 0
   * @maxLength 100
   */
  supplierEmail?: string
  currencyRate: number
  /**
   * @format int32
   * @min 1
   */
  currencyUnit?: number
  orderValue?: number
  manuallyCompleted?: boolean
  purchaseType?: "WAREHOUSE" | "DROPSHIP"
  /**
   * @minLength 0
   * @maxLength 25
   */
  customerId?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  customerNumber?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  customerName?: string
  orderValueInSEK?: number
  supplier?: string
  translatedResponseState?: string
  outboundDocumentReference?: DocumentReference
  dropship?: boolean
}

export interface LockedPeriod {
  /** @format date */
  EndDate?: string
}

export interface TaxReductionTaxReductionAmount {
  /**
   * @format double
   * @min 1
   */
  askedAmount: number
  workType: "SOLARCELLS" | "STORAGESELFPRODUCEDELECTRICITY" | "CHARGINGSTATIONELECTRICVEHICLE"
}

export interface ContractTemplateListItemList {
  ContractTemplates?: ContractTemplateListItem[]
}

export interface CustomerReferenceCustomerReferenceRowWrap {
  CustomerReferenceRow?: CustomerReferenceCustomerReferenceRow
}

export interface EmployeeListItemWrap {
  Employees?: EmployeeListItem[]
}

export interface ProjectListItemList {
  Projects?: ProjectListItem[]
}

export interface ContractAccrual {
  "@url"?: string
  /**
   * @format int32
   * @min 1000
   * @max 9999
   */
  AccrualAccount: number
  /**
   * @format int32
   * @min 1000
   * @max 9999
   */
  CostAccount: number
  Description: string
  /**
   * @maxItems 2147483647
   * @minItems 2
   */
  AccrualRows: ContractAccrualAccrualRow[]
  /** @format int32 */
  DocumentNumber: number
  Period?: "MONTHLY" | "BIMONTHLY" | "QUARTERLY" | "SEMIANNUALLY" | "ANNUALLY"
  /** @format int32 */
  Times?: number
  /** @format double */
  Total: number
  VATIncluded?: boolean
}

export interface PredefinedVoucherSeriesWrap {
  PreDefinedVoucherSeries?: PredefinedVoucherSeries
}

export interface TrustedEmailSenderRejectedSender {
  /** @format int32 */
  Id?: number
  Email: string
}

export interface StockTransferDocument {
  /**
   * @format int64
   * @min 1
   */
  id?: number
  /**
   * @minLength 0
   * @maxLength 1000
   */
  note?: string
  rows?: StockTransferRow[]
  released?: boolean
  voided?: boolean
  /** @format int64 */
  version?: number
  /** @format date */
  transferDate?: string
}

export interface ProjectListItem {
  "@url"?: string
  /**
   * @minLength 1
   * @maxLength 50
   */
  Description: string
  /** @format date */
  EndDate?: string
  /**
   * @minLength 0
   * @maxLength 50
   */
  ProjectLeader?: string
  /**
   * @minLength 0
   * @maxLength 20
   */
  ProjectNumber?: string
  Status?: "NOTSTARTED" | "ONGOING" | "COMPLETED"
  /** @format date */
  StartDate?: string
}

export interface Unit {
  "@url"?: string
  /**
   * @minLength 1
   * @maxLength 20
   */
  Code: string
  /**
   * @minLength 1
   * @maxLength 100
   */
  Description: string
  /**
   * @minLength 0
   * @maxLength 100
   */
  CodeEnglish?: string
}

export interface AccountSingleItemWrap {
  Account?: AccountSingleItem
}

export interface EmployeeWrap {
  Employee?: Employee
}

export interface InvoicePayloadEmailInformation {
  EmailAddressFrom?: string
  EmailAddressTo?: string
  EmailAddressCC?: string
  EmailAddressBCC?: string
  /**
   * @minLength 0
   * @maxLength 100
   */
  EmailSubject?: string
  /**
   * @minLength 0
   * @maxLength 20000
   */
  EmailBody?: string
}

export interface TermsOfPaymentList {
  TermsOfPayments?: TermsOfPayment[]
}

export interface OfferEmailInformation {
  EmailAddressFrom?: string
  EmailAddressTo?: string
  EmailAddressCC?: string
  EmailAddressBCC?: string
  /**
   * @minLength 0
   * @maxLength 100
   */
  EmailSubject?: string
  /**
   * @minLength 0
   * @maxLength 20000
   */
  EmailBody?: string
}

export interface TermsOfPayment {
  "@url"?: string
  /**
   * @minLength 1
   * @maxLength 25
   */
  Code: string
  Description: string
}

export interface StockPoint {
  /** @format uuid */
  id?: string
  /**
   * @minLength 1
   * @maxLength 10
   */
  code: string
  /**
   * @minLength 1
   * @maxLength 25
   */
  name: string
  stockLocations?: StockLocation[]
  usingCompanyAddress?: boolean
  /**
   * @minLength 0
   * @maxLength 50
   */
  deliveryName?: string
  /**
   * @minLength 0
   * @maxLength 50
   */
  deliveryAddress?: string
  /**
   * @minLength 0
   * @maxLength 50
   */
  deliveryAddress2?: string
  /**
   * @minLength 0
   * @maxLength 10
   */
  deliveryZipCode?: string
  /**
   * @minLength 0
   * @maxLength 50
   */
  deliveryCity?: string
  /**
   * @minLength 0
   * @maxLength 50
   */
  deliveryPhone?: string
  /**
   * @minLength 0
   * @maxLength 3
   */
  deliveryCountryCode?: string
  active?: boolean
}

export interface CustomDocumentType {
  /**
   * @minLength 1
   * @maxLength 25
   * @pattern [a-zA-Z0-9_-]+
   */
  referenceType: string
  category: "INBOUND" | "OUTBOUND"
}

export interface SupplierInvoiceFileConnectionList {
  SupplierInvoiceFileConnections?: SupplierInvoiceFileConnection[]
}

export interface SupplierInvoiceExternalURLConnectionSingle {
  SupplierInvoiceExternalURLConnection?: SupplierInvoiceExternalURLConnection
}

export interface CustomInboundDocument {
  /**
   * @minLength 1
   * @maxLength 25
   * @pattern ^[0-9]+
   */
  id?: string
  /**
   * @minLength 1
   * @maxLength 25
   * @pattern [a-zA-Z0-9_-]+
   */
  type?: string
  /** @format date */
  date: string
  currency?: Currency
  /**
   * @minLength 0
   * @maxLength 1000
   */
  note?: string
  warehouseReady?: boolean
  voided?: boolean
  rows: CustomInboundDocumentRow[]
}

export interface InvoicePayload {
  /** @format double */
  AdministrationFee?: number
  Address1?: string
  Address2?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  City?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  Comments?: string
  Country?: string
  CostCenter?: string
  CreditInvoiceReference?: string
  Currency?: string
  /** @format double */
  CurrencyRate?: number
  /** @format int32 */
  CurrencyUnit?: number
  CustomerName?: string
  CustomerNumber: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  DeliveryAddress1?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  DeliveryAddress2?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  DeliveryCity?: string
  DeliveryCountry?: string
  /** @format date */
  DeliveryDate?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  DeliveryName?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  DeliveryZipCode?: string
  DocumentNumber?: string
  /** @format date */
  DueDate?: string
  EDIInformation?: InvoicePayloadEDIInformation
  EmailInformation?: InvoicePayloadEmailInformation
  EUQuarterlyReport?: boolean
  /**
   * @minLength 0
   * @maxLength 80
   */
  ExternalInvoiceReference1?: string
  /**
   * @minLength 0
   * @maxLength 80
   */
  ExternalInvoiceReference2?: string
  /** @format double */
  Freight?: number
  /** @format date */
  InvoiceDate?: string
  InvoiceRows?: InvoicePayloadInvoiceRow[]
  InvoiceType?: "INVOICE" | "AGREEMENTINVOICE" | "INTRESTINVOICE" | "SUMMARYINVOICE" | "CASHINVOICE"
  Labels?: InvoicePayloadLabel[]
  Language?: "SV" | "EN"
  NotCompleted?: boolean
  OCR?: string
  /**
   * @minLength 0
   * @maxLength 50
   */
  OurReference?: string
  PaymentWay?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  Phone1?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  Phone2?: string
  PriceList?: string
  PrintTemplate?: string
  Project?: string
  /** @format date */
  OutboundDate?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  Remarks?: string
  TermsOfDelivery?: string
  TermsOfPayment?: string
  VATIncluded?: boolean
  WayOfDelivery?: string
  /**
   * @minLength 0
   * @maxLength 75
   */
  YourOrderNumber?: string
  /**
   * @minLength 0
   * @maxLength 50
   */
  YourReference?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  ZipCode?: string
  TaxReductionType?: "none" | "rot" | "rut" | "green"
}

export interface AbsenceTransactionPayloadWrap {
  AbsenceTransaction?: AbsenceTransactionPayload
}

export interface ContractEmailInformation {
  EmailAddressFrom?: string
  EmailAddressTo?: string
  EmailAddressCC?: string
  EmailAddressBCC?: string
  EmailSubject?: string
  EmailBody?: string
}

export interface CustomInboundDocumentRow {
  /**
   * @format int64
   * @min 1
   */
  rowId?: number
  /**
   * @minLength 1
   * @maxLength 50
   */
  itemId: string
  quantity: number
  directCost?: number
  freightCost?: number
  otherCost?: number
  /**
   * @minLength 0
   * @maxLength 50
   */
  batch?: string
  /** @format uuid */
  stockPointId?: string
  /** @format uuid */
  stockLocationId?: string
  /**
   * @minLength 1
   * @maxLength 25
   */
  costCenterCode?: string
  /**
   * @minLength 1
   * @maxLength 25
   */
  projectId?: string
  /**
   * @minLength 0
   * @maxLength 200
   */
  itemDescription?: string
  /**
   * @minLength 0
   * @maxLength 50
   */
  itemUnit?: string
  stockPointCode?: string
  stockLocationCode?: string
}

export interface ArticleFileConnectionListItem {
  "@url"?: string
  FileId: string
  ArticleNumber: string
}

export interface Order {
  "@url"?: string
  "@urlTaxReductionList"?: string
  /** @format double */
  AdministrationFee?: number
  /** @format double */
  AdministrationFeeVAT?: number
  Address1?: string
  Address2?: string
  /** @format double */
  BasisTaxReduction?: number
  Cancelled?: boolean
  City?: string
  Comments?: string
  /** @format double */
  ContributionPercent?: number
  /** @format double */
  ContributionValue?: number
  CopyRemarks?: boolean
  Country?: string
  CostCenter?: string
  /**
   * @minLength 0
   * @maxLength 3
   */
  Currency?: string
  /** @format double */
  CurrencyRate?: number
  /** @format double */
  CurrencyUnit?: number
  CustomerName?: string
  CustomerNumber: string
  DeliveryState?: "registration" | "reservation" | "delivery"
  DeliveryAddress1?: string
  DeliveryAddress2?: string
  DeliveryCity?: string
  DeliveryCountry?: string
  /** @format date */
  DeliveryDate?: string
  DeliveryName?: string
  DeliveryZipCode?: string
  DocumentNumber?: string
  EmailInformation?: OrderEmailInformation
  ExternalInvoiceReference1?: string
  ExternalInvoiceReference2?: string
  /** @format double */
  Freight?: number
  /** @format double */
  FreightVAT?: number
  /** @format double */
  Gross?: number
  HouseWork?: boolean
  InvoiceReference?: string
  Labels?: OrderLabel[]
  Language?: string
  /** @format double */
  Net?: number
  NotCompleted?: boolean
  OfferReference?: string
  /** @format date */
  OrderDate?: string
  OrderRows?: OrderOrderRow[]
  OrderType?: string
  OrganisationNumber?: string
  /**
   * @minLength 0
   * @maxLength 50
   */
  OurReference?: string
  Phone1?: string
  Phone2?: string
  PriceList?: string
  PrintTemplate?: string
  Project?: string
  WarehouseReady?: boolean
  /** @format date */
  OutboundDate?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  Remarks?: string
  /** @format double */
  RoundOff?: number
  Sent?: boolean
  /** @format double */
  TaxReduction?: number
  TermsOfDelivery?: string
  TermsOfPayment?: string
  /** @format int32 */
  TimeBasisReference?: number
  /** @format double */
  Total?: number
  /** @format double */
  TotalToPay?: number
  /** @format double */
  TotalVAT?: number
  VATIncluded?: boolean
  WayOfDelivery?: string
  /**
   * @minLength 0
   * @maxLength 50
   */
  YourReference?: string
  /**
   * @minLength 0
   * @maxLength 75
   */
  YourOrderNumber?: string
  ZipCode?: string
  StockPointCode?: string
  StockPointId?: string
  TaxReductionType?: "none" | "rot" | "rut" | "green"
}

export interface SupplierInvoiceFileConnection {
  "@url"?: string
  FileId?: string
  Name?: string
  SupplierInvoiceNumber?: string
  SupplierName?: string
}

export interface StockBalance {
  itemId?: string
  availableStock?: number
  inStock?: number
  stockPointCode?: string
}

export interface TrustedEmailSenderTrustedSenderWrap {
  TrustedSender?: TrustedEmailSenderTrustedSender
}

export interface VoucherListItem {
  "@url"?: string
  Comments?: string
  Description?: string
  ReferenceNumber?: string
  ReferenceType?:
    | "INVOICE"
    | "SUPPLIERINVOICE"
    | "INVOICEPAYMENT"
    | "SUPPLIERPAYMENT"
    | "MANUAL"
    | "CASHINVOICE"
    | "ACCRUAL"
  /** @format date */
  TransactionDate?: string
  /** @format int32 */
  VoucherNumber?: number
  VoucherSeries?: string
  /** @format int32 */
  Year?: number
  /** @format int32 */
  ApprovalState?: number
}

export interface CurrencyList {
  MetaInformation?: MetaInformation
  Currencies?: Currency[]
}

export interface PrintTemplate {
  Template: string
  /**
   * @minLength 1
   * @maxLength 25
   */
  Name?: string
}

export interface InvoicePaymentListItemList {
  InvoicePayments?: InvoicePaymentListItem[]
}

export interface VoucherFileConnectionList {
  VoucherFileConnections?: VoucherFileConnection[]
}

export interface TrustedEmailSenderWrap {
  EmailSenders?: TrustedEmailSender
}

export interface Price {
  "@url"?: string
  ArticleNumber: string
  /** @format date-time */
  Date?: string
  /** @format double */
  FromQuantity?: number
  /** @format double */
  Percent?: number
  /** @format double */
  Price?: number
  PriceList: string
}

export interface ManualOutboundDocument {
  /** @format date */
  date: string
  /**
   * @maxItems 2147483647
   * @minItems 0
   */
  rows: ManualOutboundDocumentRow[]
  /** @format int64 */
  id?: number
  voided?: boolean
  released?: boolean
  /**
   * @minLength 0
   * @maxLength 1000
   */
  note?: string
  /** @format uuid */
  stockPointId?: string
  stockPointCode?: string
  stockPointName?: string
}

export interface CustomerListItem {
  "@url"?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  Address1?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  Address2?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  City?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  CustomerNumber?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  Email?: string
  /**
   * @minLength 1
   * @maxLength 1024
   */
  Name: string
  /**
   * @minLength 0
   * @maxLength 30
   */
  OrganisationNumber?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  Phone?: string
  /**
   * @minLength 0
   * @maxLength 10
   */
  ZipCode?: string
}

export interface Me {
  Id?: string
  Name?: string
  Email?: string
  SysAdmin?: boolean
  Locale?: string
}

export interface DetailedRegistration {
  /** @format uuid */
  id?: string
  costCenter?: TRCostCenter
  customer?: TRCustomer
  project?: TRProject
  service?: TRItem
  registrationCode: RegistrationCode
  /** @format date */
  workedDate: string
  /** @format float */
  workedHours?: number
  /** @format float */
  chargeHours?: number
  /** @format date-time */
  startTime?: string
  /** @format date-time */
  stopTime?: string
  /**
   * @minLength 0
   * @maxLength 1000
   */
  invoiceText?: string
  /**
   * @minLength 0
   * @maxLength 1000
   */
  note?: string
  userId?: string
  createdBy?: string
  updatedBy?: string
  /** @format int64 */
  invoiceBasisId?: number
  nonInvoiceable?: boolean
  /** @format uuid */
  childId?: string
  /** @format date-time */
  createdTime?: string
  unitCost?: number
  unitPrice?: number
  /** @format int64 */
  documentId?: number
  documentType?: "order" | "invoice"
}

export interface VoucherSeriesWrap {
  VoucherSeries: VoucherSeries
}

export interface CompanyInfo {
  Address?: string
  City?: string
  CountryCode?: string
  /** @format int32 */
  DatabaseNumber?: number
  CompanyName?: string
  OrganizationNumber?: string
  VisitAddress?: string
  VisitCity?: string
  VisitCountryCode?: string
  VisitZipCode?: string
  ZipCode?: string
}

export interface SalaryTransactionListItem {
  "@url"?: string
  EmployeeId: string
  SalaryCode: string
  /** @format int32 */
  SalaryRow?: number
  /** @format date */
  Date: string
  Number?: string
  Amount?: string
  Total?: string
  /**
   * @minLength 0
   * @maxLength 6
   */
  Expense?: string
  VAT?: string
  /**
   * @minLength 0
   * @maxLength 40
   */
  TextRow?: string
  CostCenter?: string
  Project?: string
}

export interface AccountSingleItem {
  "@url"?: string
  Active?: boolean
  /** @format double */
  BalanceBroughtForward?: number
  CostCenter?: string
  CostCenterSettings?: "ALLOWED" | "MANDATORY" | "NOTALLOWED"
  /**
   * @minLength 1
   * @maxLength 200
   */
  Description: string
  /**
   * @format int32
   * @min 1000
   * @max 9999
   */
  Number: number
  Project?: string
  ProjectSettings?: "ALLOWED" | "MANDATORY" | "NOTALLOWED"
  /** @format int32 */
  SRU?: number
  /** @format int32 */
  Year?: number
  VATCode?: string
  /** @format double */
  BalanceCarriedForward?: number
  TransactionInformation?: string
  TransactionInformationSettings?: "ALLOWED" | "MANDATORY" | "NOTALLOWED"
  QuantitySettings?: "ALLOWED" | "MANDATORY" | "NOTALLOWED"
  QuantityUnit?: string
  OpeningQuantities?: AccountSingleItemOpeningQuantities[]
}

export interface SellWrap {
  Asset?: Sell
}

export interface AbsenceTransactionSingleItem {
  "@url"?: string
  /** @format uuid */
  id?: string
  /**
   * @minLength 1
   * @maxLength 15
   */
  EmployeeId: string
  /**
   * @minLength 3
   * @maxLength 3
   */
  CauseCode:
    | "ASK"
    | "FPE"
    | "FRA"
    | "HAV"
    | "KOM"
    | "MIL"
    | "NAR"
    | "OS1"
    | "OS2"
    | "OS3"
    | "OS4"
    | "OS5"
    | "PAP"
    | "PEM"
    | "PER"
    | "SEM"
    | "SJK"
    | "SMB"
    | "SVE"
    | "TJL"
    | "UTB"
    | "VAB"
  /** @format date */
  Date: string
  /** @format float */
  Extent?: number
  /** @format float */
  Hours?: number
  HolidayEntitling?: boolean
  CostCenter?: string
  Project?: string
}

export interface ArticleFileConnectionWrap {
  ArticleFileConnection: ArticleFileConnection
}

export interface InvoicePayloadWrap {
  Invoice?: InvoicePayload
}

export interface ContractInvoiceRow {
  /**
   * @format int32
   * @min 1000
   * @max 9999
   */
  AccountNumber?: number
  ArticleNumber: string
  ContributionPercent?: string
  ContributionValue?: string
  CostCenter?: string
  DeliveredQuantity: string
  Description?: string
  /** @format double */
  Discount?: number
  DiscountType?: "AMOUNT" | "PERCENT"
  HouseWork?: boolean
  /** @format int32 */
  HouseWorkHoursToReport?: number
  HouseWorkType?: string
  /** @format double */
  Price?: number
  /** @format double */
  PriceExcludingVAT?: number
  Project?: string
  /** @format int32 */
  RowId?: number
  /** @format double */
  Total?: number
  /** @format double */
  TotalExcludingVAT?: number
  Unit?: string
  /** @format double */
  VAT?: number
}

export interface CustomerWrap {
  Customer?: Customer
}

export interface CostCenterList {
  CostCenters?: CostCenter[]
}

export interface TenantInfo {
  /** @format int64 */
  tenantId?: number
  activated?: boolean
}

export interface InvoiceWrap {
  Invoice?: Invoice
}

export interface PackageItem {
  itemId: string
  itemDescription?: string
  itemUnit?: string
  quantityRequired: number
  quantityReserved?: number
  totalQuantityRequired?: number
}

export interface InvoicePayloadEDIInformation {
  /**
   * @minLength 0
   * @maxLength 13
   */
  EDIGlobalLocationNumber?: string
  /**
   * @minLength 0
   * @maxLength 13
   */
  EDIGlobalLocationNumberDelivery?: string
  EDIInvoiceExtra1?: string
  EDIInvoiceExtra2?: string
  EDIOurElectronicReference?: string
  EDIYourElectronicReference?: string
}

export interface PriceListList {
  PriceLists?: PriceList[]
}

export interface SupplierInvoiceAccrualSupplierInvoiceAccrualRows {
  /** @format int32 */
  Account?: number
  CostCenter?: string
  /** @format double */
  Credit?: number
  /** @format double */
  Debit?: number
  Project?: string
  TransactionInformation?: string
}

export interface CostCenter {
  "@url"?: string
  /**
   * @minLength 1
   * @maxLength 6
   */
  Code: string
  /**
   * @minLength 1
   * @maxLength 2147483647
   */
  Description: string
  Note?: string
  Active?: boolean
}

export interface TrustedEmailSenderTrustedSender {
  /** @format int32 */
  Id?: number
  Email: string
}

export interface SalaryTransaction {
  EmployeeId: string
  SalaryCode: string
  /** @format int32 */
  SalaryRow?: number
  /** @format date */
  Date: string
  Number?: string
  Amount?: string
  Total?: string
  /**
   * @minLength 0
   * @maxLength 6
   */
  Expense?: string
  VAT?: string
  /**
   * @minLength 0
   * @maxLength 40
   */
  TextRow?: string
  CostCenter?: string
  Project?: string
}

export interface NumberOfAttachments {
  /** @format int64 */
  entityId: number
  /** @format int64 */
  numberOfAttachments?: number
}

export interface AttendanceTransactionListItem {
  "@url"?: string
  /** @format uuid */
  id?: string
  /**
   * @minLength 1
   * @maxLength 15
   */
  EmployeeId: string
  /**
   * @minLength 3
   * @maxLength 3
   */
  CauseCode:
    | "ARB"
    | "BE2"
    | "BER"
    | "FLX"
    | "HLG"
    | "JO2"
    | "JOR"
    | "MER"
    | "OB1"
    | "OB2"
    | "OB3"
    | "OB4"
    | "OB5"
    | "OK0"
    | "OK1"
    | "OK2"
    | "OK3"
    | "OK4"
    | "OK5"
    | "OT1"
    | "OT2"
    | "OT3"
    | "OT4"
    | "OT5"
    | "RES"
    | "TID"
  /** @format date */
  Date: string
  Hours?: string
  CostCenter?: string
  Project?: string
}

export interface ArticleRegistration {
  /** @format uuid */
  id?: string
  totalQuantity?: number
  unitCost?: number
  unitPrice?: number
  /** @format int32 */
  orderIndex?: number
  item?: TRItem
  /**
   * @minLength 0
   * @maxLength 1000
   */
  invoiceText?: string
  /**
   * @minLength 0
   * @maxLength 1000
   */
  note?: string
  timeLocked?: boolean
  /** @format int64 */
  invoiceBasisId?: number
  nonInvoiceable?: boolean
  /** @format int64 */
  documentId?: number
  documentType?: "order" | "invoice"
  ownerId?: string
  createdBy?: string
  /** @format date-time */
  createdTime?: string
}

export interface ContractAccrualListItemList {
  ContractAccruals?: ContractAccrualListItem[]
}

export interface PriceList {
  "@url"?: string
  /**
   * @minLength 1
   * @maxLength 100
   */
  Code: string
  /**
   * @minLength 1
   * @maxLength 50
   */
  Description: string
  Comments?: string
  PreSelected?: boolean
}

export interface ManualInboundDocument {
  /** @format date */
  date: string
  /**
   * @maxItems 2147483647
   * @minItems 1
   */
  rows: ManualInboundDocumentRow[]
  /** @format int64 */
  id?: number
  /**
   * @minLength 3
   * @maxLength 3
   */
  currency: string
  /**
   * @min 0.000001
   * @exclusiveMin false
   */
  currencyRate: number
  /**
   * @format int32
   * @min 1
   */
  currencyUnit?: number
  released?: boolean
  voided?: boolean
  /**
   * @minLength 0
   * @maxLength 1000
   */
  note?: string
  /** @format uuid */
  stockPointId?: string
  stockPointCode?: string
  stockPointName?: string
}

export interface AbsenceTransactionListItemWrap {
  AbsenceTransactions?: AbsenceTransactionListItem[]
}

export interface TRProject {
  /**
   * @minLength 0
   * @maxLength 40
   */
  id?: string
  /**
   * @minLength 0
   * @maxLength 50
   */
  description?: string
  projectLeader?: string
  /** @format date */
  startDate?: string
  /** @format date */
  endDate?: string
  /** @format int32 */
  status?: number
  /** @format double */
  orderTime?: number
  /** @format double */
  orderAmount?: number
  /** @format double */
  invoicedAmount?: number
  /** @format double */
  totalAmountInInvoices?: number
}

export interface SupplierInvoiceAccrual {
  "@url"?: string
  /**
   * @format int32
   * @min 1000
   * @max 9999
   */
  AccrualAccount: number
  /**
   * @format int32
   * @min 1000
   * @max 9999
   */
  CostAccount: number
  Description?: string
  /** @format date */
  EndDate: string
  /** @format int32 */
  SupplierInvoiceNumber: number
  Period:
    | "MONTHLY"
    | "BIMONTHLY"
    | "QUARTERLY"
    | "SEMIANNUALLY"
    | "ANNUALLY"
    | "1_MONTHS"
    | "2_MONTHS"
    | "3_MONTHS"
    | "6_MONTHS"
    | "12_MONTHS"
  /** @format date */
  StartDate: string
  /** @format int32 */
  Times: number
  /** @format double */
  Total: number
  VATIncluded?: boolean
  /**
   * @maxItems 2147483647
   * @minItems 2
   */
  SupplierInvoiceAccrualRows: SupplierInvoiceAccrualSupplierInvoiceAccrualRows[]
}

export interface FolderFileRow {
  "@url"?: string
  Comments?: string
  Id?: string
  Name?: string
  Path?: string
  /** @format int32 */
  Size?: number
  ArchiveFileId?: string
}

export interface WriteUpWrap {
  Asset?: WriteUp
}

export interface CreatePayloadWrap {
  NoxFinansInvoice?: CreatePayload
}

export interface PausePayloadWrap {
  NoxFinansInvoice?: PausePayload
}

export interface CreateAssetWrap {
  AssetType?: CreateAsset
}

export interface LockedPeriodWrap {
  LockedPeriod?: LockedPeriod
}

export interface Voucher {
  "@url"?: string
  /**
   * @minLength 0
   * @maxLength 1000
   */
  Comments?: string
  CostCenter?: string
  /**
   * @minLength 1
   * @maxLength 200
   */
  Description: string
  Project?: string
  ReferenceNumber?: string
  ReferenceType?:
    | "INVOICE"
    | "SUPPLIERINVOICE"
    | "INVOICEPAYMENT"
    | "SUPPLIERPAYMENT"
    | "MANUAL"
    | "CASHINVOICE"
    | "ACCRUAL"
  /** @format date */
  TransactionDate: string
  /** @format int32 */
  VoucherNumber?: number
  /**
   * @maxItems 2147483647
   * @minItems 2
   */
  VoucherRows?: VoucherVoucherRow[]
  VoucherSeries: string
  /** @format int32 */
  Year: number
  /** @format int32 */
  ApprovalState?: number
}

export interface ContractTemplate {
  "@url"?: string
  /** @format double */
  AdministrationFee?: number
  /**
   * @format int32
   * @min 1
   * @max 9999
   */
  ContractLength?: number
  /** @format double */
  Freight?: number
  /**
   * @format int32
   * @min 1
   * @max 9999
   */
  InvoiceInterval?: number
  InvoiceRows?: ContractTemplateInvoiceRow[]
  Continuous?: boolean
  /**
   * @minLength 0
   * @maxLength 25
   */
  OurReference?: string
  PrintTemplate?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  Remarks?: string
  /**
   * @minLength 1
   * @maxLength 1024
   */
  TemplateName: string
  /** @format int32 */
  TemplateNumber?: number
  TermsOfDelivery?: string
  TermsOfPayment?: string
  WayOfDelivery?: string
}

export interface AssetType {
  "@url"?: string
  /** @format int32 */
  Id?: number
  Number?: string
  Description?: string
  Notes?: string
  /** @format int32 */
  Type?: number
  InUse?: boolean
  /** @format int32 */
  AccountAssetId?: number
  /** @format int32 */
  AccountValueLossId?: number
  /** @format int32 */
  AccountSaleLossId?: number
  /** @format int32 */
  AccountSaleWinId?: number
  /** @format int32 */
  AccountRevaluationId?: number
  /** @format int32 */
  AccountWriteDownAckId?: number
  /** @format int32 */
  AccountWriteDownId?: number
  /** @format int32 */
  AccountDepreciationId?: number
  /** @format int32 */
  AccountAsset?: number
  /** @format int32 */
  AccountValueLoss?: number
  /** @format int32 */
  AccountSaleLoss?: number
  /** @format int32 */
  AccountSaleWin?: number
  /** @format int32 */
  AccountRevaluation?: number
  /** @format int32 */
  AccountWriteDownAck?: number
  /** @format int32 */
  AccountWriteDown?: number
  /** @format int32 */
  AccountDepreciation?: number
}

export interface WayOfDeliveryList {
  WayOfDeliveries?: WayOfDelivery[]
}

export interface IncomingGoods {
  /** @format int64 */
  id?: number
  hasDeliveryNote?: boolean
  /**
   * @minLength 1
   * @maxLength 50
   */
  deliveryNoteId: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  supplierNumber?: string
  rows?: IncomingGoodsRow[]
  /** @format date */
  date?: string
  released?: boolean
  /**
   * @minLength 0
   * @maxLength 1000
   */
  note?: string
  completed?: boolean
  /** @format uuid */
  stockPointId?: string
  stockPointCode?: string
  stockPointName?: string
  voided?: boolean
  projectId?: string
  costCenterCode?: string
  /**
   * @minLength 0
   * @maxLength 1024
   */
  supplierName?: string
}

export interface InvoiceListItemWrap {
  Invoices?: InvoiceListItem[]
}

export interface ExpenseListItem {
  Code: string
  Text: string
  /** @format int32 */
  Account: number
  "@url"?: string
}

export interface ContractAccrualAccrualRow {
  /** @format int32 */
  Account: number
  CostCenter?: string
  /** @format double */
  Credit: number
  /** @format double */
  Debit: number
  Project?: string
  /**
   * @minLength 0
   * @maxLength 100
   */
  TransactionInformation?: string
}

export interface InvoicePayloadLabel {
  /** @format int32 */
  Id?: number
}

export interface VoucherFileConnectionWrap {
  VoucherFileConnection: VoucherFileConnection
}

export interface AssetTypeWrapSingle {
  Type?: AssetType
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios"

export type QueryParamsType = Record<string | number, any>

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean
  /** request path */
  path: string
  /** content type of request body */
  type?: ContentType
  /** query params */
  query?: QueryParamsType
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType
  /** request body */
  body?: unknown

  responseType?: ResponseType
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void
  secure?: boolean
  format?: ResponseType
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance
  private securityData: SecurityDataType | null = null
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"]
  private secure?: boolean
  private format?: ResponseType

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "https://api.fortnox.se" })
    this.secure = secure
    this.format = format
    this.securityWorker = securityWorker
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data
  }

  protected mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method)

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    }
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem)
    } else {
      return `${formItem}`
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key]
      const propertyContent: any[] = property instanceof Array ? property : [property]

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem))
      }

      return formData
    }, new FormData())
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {}
    const requestParams = this.mergeRequestParams(params, secureParams)
    const responseFormat = format || this.format || undefined

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>)
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body)
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    })
  }
}

/**
 * @title No title
 * @baseUrl https://api.fortnox.se
 *
 * # Documentation
 *
 * The Fortnox API is organized around REST. This means that we’ve designed it to have resource-oriented URLs and be as predictable as possible for you as developer.
 *
 * It also means that we use HTTP status codes when something goes wrong and HTTP verbs understod by many API clients around the web.
 *
 * We use a modified version of OAuth2 for authentication to offer a secure way for both you and our users to interact.
 *
 * The API is generally built to support both XML and JSON but in this documentation all the examples will be in JSON.
 *
 * We encourage you to read all the articles in the [Guides & Good to Know section](https://www.fortnox.se/developer/guides-and-good-to-know/)</a> first, before going forward and learning about the different resources.
 *
 * This to ensure you get an understanding of some of the shared components of the API such as parameters and error handling.
 *
 * ## Rate limits
 *
 * The limit per access-token is 25 requests per 5 seconds. This equals to 300 requests per minute.
 *
 * [Read more about this here.](https://www.fortnox.se/developer/guides-and-good-to-know/rate-limits-for-fortnox-api/)
 *
 * ## Query parameters
 *
 * Use query parameters with the ?-character and separate parameters with the &-character.
 *
 * **Example:**
 *  GET - https://api.fortnox.se/3/invoices?accountnumberfrom=3000&accountnumberto=4000
 * Read more about our parameters [here](https://www.fortnox.se/developer/guides-and-good-to-know/parameters/)
 *
 *
 * Search the documentation using the search field in the top left corner.
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  warehouse = {
    /**
     * @description <p> List stock points, optionally include a query parameter `q` to filter on stock point code or name. <p> Use query param `state` to filter on ACTIVE, INACTIVE or ALL (default is to include only ACTIVE stock points). <p> Stock locations are NOT included in the response.
     *
     * @tags StockPointResource
     * @name GetAll
     * @summary List stock points
     * @request GET:/api/warehouse/stockpoints-v1
     * @response `200` `StockPoint` A list of <code>StockPoints</code>.
     */
    getAll: (
      query?: {
        /** filters on stock point code or name. */
        q?: string
        /** filter on stock point state */
        state?: "ALL" | "ACTIVE" | "INACTIVE"
      },
      params: RequestParams = {}
    ) =>
      this.request<StockPoint, any>({
        path: `/api/warehouse/stockpoints-v1`,
        method: "GET",
        query: query,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description <p> Both <code>code</code> and <code>name</code> are mandatory. <p> If you want to set a custom delivery address for this stock point, you must remember to set <code>usingCompanyAddress</code> to <code>false</code>. <p> Returns 400 <code>alreadyexists</code> if a stock point with same code already exists. <p> Returns 400 <code>duplicatestocklocations</code> if two or more stock locations have the same code.
     *
     * @tags StockPointResource
     * @name Create
     * @summary Create stock point
     * @request POST:/api/warehouse/stockpoints-v1
     * @response `200` `StockPoint` The created <code>StockPoint</code>.
     */
    create: (stockPoint: StockPoint, params: RequestParams = {}) =>
      this.request<StockPoint, any>({
        path: `/api/warehouse/stockpoints-v1`,
        method: "POST",
        body: stockPoint,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description <p> Get stock points by IDs. <p> Use query param `state` to filter on ACTIVE, INACTIVE or ALL (default is to include ALL stock points). <p> Stock locations are NOT included in the response.
     *
     * @tags StockPointResource
     * @name GetMany
     * @summary Get stock points
     * @request GET:/api/warehouse/stockpoints-v1/multi
     * @response `200` `StockPoint` A list of <code>StockPoints</code>.
     */
    getMany: (
      query?: {
        /** stock point ids (comma separated list of UUIDs) */
        ids?: string[]
        /** filter on <code>StockPointState</code>, default is to include ALL stock points. */
        state?: "ALL" | "ACTIVE" | "INACTIVE"
      },
      params: RequestParams = {}
    ) =>
      this.request<StockPoint, any>({
        path: `/api/warehouse/stockpoints-v1/multi`,
        method: "GET",
        query: query,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description <p> List stock locations for a specific stock point. <p> Optionally include a query parameter `q` to filter on stock location code or name.
     *
     * @tags StockPointResource
     * @name GetStockLocationsByAmbiguousId
     * @summary Get stock locations
     * @request GET:/api/warehouse/stockpoints-v1/{id}/stocklocations
     * @response `200` `StockLocation` A list of<code>StockLocations</code>.
     */
    getStockLocationsByAmbiguousId: (
      id: string,
      query?: {
        /** filters on stock location code or name. */
        q?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<StockLocation, any>({
        path: `/api/warehouse/stockpoints-v1/${id}/stocklocations`,
        method: "GET",
        query: query,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description <p> Get stock point by id or code.
     *
     * @tags StockPointResource
     * @name GetByAmbiguousId
     * @summary Get stock point
     * @request GET:/api/warehouse/stockpoints-v1/{id}
     * @response `200` `StockPoint` stock point
     */
    getByAmbiguousId: (id: string, params: RequestParams = {}) =>
      this.request<StockPoint, any>({
        path: `/api/warehouse/stockpoints-v1/${id}`,
        method: "GET",
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description <p> Add new stock locations to specific <code>StockPoint</code>. <p> If you include an already existing stock location code, it will be ignored.
     *
     * @tags StockPointResource
     * @name AppendStockLocations
     * @summary Append stock locations
     * @request POST:/api/warehouse/stockpoints-v1/{id}
     * @response `200` `StockLocation` A list of appended <code>StockLocations</code>.
     */
    appendStockLocations: (id: string, stockLocations: StockLocation[], params: RequestParams = {}) =>
      this.request<StockLocation, any>({
        path: `/api/warehouse/stockpoints-v1/${id}`,
        method: "POST",
        body: stockLocations,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description <p> Remember to supply the complete representation of stock point including stock locations.
     *
     * @tags StockPointResource
     * @name Update
     * @summary Update stock point
     * @request PUT:/api/warehouse/stockpoints-v1/{id}
     * @response `200` `StockPoint` The updated <code>StockPoint</code>.
     */
    update: (id: string, stockPoint: StockPoint, params: RequestParams = {}) =>
      this.request<StockPoint, any>({
        path: `/api/warehouse/stockpoints-v1/${id}`,
        method: "PUT",
        body: stockPoint,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description <p> Note that it is not allowed to delete a stock point that is in use.
     *
     * @tags StockPointResource
     * @name Delete
     * @summary Delete stock point
     * @request DELETE:/api/warehouse/stockpoints-v1/{id}
     * @response `200` `StockPoint` The deleted <code>StockPoint</code>.
     */
    delete: (id: string, params: RequestParams = {}) =>
      this.request<StockPoint, any>({
        path: `/api/warehouse/stockpoints-v1/${id}`,
        method: "DELETE",
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StockTransferResource
     * @name Get
     * @summary Get stock transfer document
     * @request GET:/api/warehouse/stocktransfer-v1/{id}
     * @response `200` `StockTransferDocument` The <code>StockTransferDocument</code> document.
     */
    get: (id: number, params: RequestParams = {}) =>
      this.request<StockTransferDocument, any>({
        path: `/api/warehouse/stocktransfer-v1/${id}`,
        method: "GET",
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StockTransferResource
     * @name UpdateStockTransferResource
     * @summary Update a stock transfer document
     * @request PUT:/api/warehouse/stocktransfer-v1/{id}
     * @response `200` `StockTransferDocument` The <code>StockTransferDocument</code> document.
     */
    updateStockTransferResource: (id: number, document: StockTransferDocument, params: RequestParams = {}) =>
      this.request<StockTransferDocument, any>({
        path: `/api/warehouse/stocktransfer-v1/${id}`,
        method: "PUT",
        body: document,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description <p> Outbounds will be reserved in the from-place. Inbounds are created upon release of the stock transfer document.
     *
     * @tags StockTransferResource
     * @name CreateStockTransferResource
     * @summary Create a stock transfer document
     * @request POST:/api/warehouse/stocktransfer-v1
     * @response `200` `StockTransferDocument` The <code>StockTransferDocument</code> document.
     */
    createStockTransferResource: (document: StockTransferDocument, params: RequestParams = {}) =>
      this.request<StockTransferDocument, any>({
        path: `/api/warehouse/stocktransfer-v1`,
        method: "POST",
        body: document,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description <p> This will deliver all outbounds which are reserved in from-place, and create inbounds in the to-place. Nothing happens if you releasr an already released stock transfer document. <p> Returns <code>document_is_voided</code> if document is voided.
     *
     * @tags StockTransferResource
     * @name Release
     * @summary Release a stock transfer document
     * @request PUT:/api/warehouse/stocktransfer-v1/{id}/release
     * @response `default` `void` Nothing.
     */
    release: (id: number, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/api/warehouse/stocktransfer-v1/${id}/release`,
        method: "PUT",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description <p> Voiding a released stock transfer document is not allowed, and will return <code>cannot_modify_released_document</code>
     *
     * @tags StockTransferResource
     * @name VoidStockTransfer
     * @summary Void a stock transfer document
     * @request PUT:/api/warehouse/stocktransfer-v1/{id}/void
     * @response `default` `void` Nothing.
     */
    voidStockTransfer: (id: number, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/api/warehouse/stocktransfer-v1/${id}/void`,
        method: "PUT",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description <p> Check if current tenant has activated Fortnox Warehouse.
     *
     * @tags TenantResource
     * @name GetTenant
     * @summary Get Warehouse activation status
     * @request GET:/api/warehouse/tenants-v4
     * @response `200` `TenantInfo` Warehouse activation status for the current tenant
     */
    getTenant: (params: RequestParams = {}) =>
      this.request<TenantInfo, any>({
        path: `/api/warehouse/tenants-v4`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ManualDocumentResource
     * @name GetAllManualDocumentResource
     * @summary List manual documents
     * @request GET:/api/warehouse/deliveries-v1
     * @response `200` `ManualDocument` A list of manual documents.
     */
    getAllManualDocumentResource: (
      query?: {
        /** Include only documents with given state. */
        state?: "all" | "unreleased" | "released" | "voided"
        /** Include only documents with given type. */
        type?: "all" | "inbound" | "outbound" | "stocktransfer"
        /** Include only documents containing the given item. */
        itemId?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<ManualDocument, any>({
        path: `/api/warehouse/deliveries-v1`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description <p> The <code>id</code> is set automatically.
     *
     * @tags ManualInboundDocumentResource
     * @name CreateManualInboundDocumentResource
     * @summary Create manual inbound document
     * @request POST:/api/warehouse/deliveries-v1/inbounddeliveries
     * @response `200` `ManualInboundDocument` the <code>ManualInboundDocument</code> document.
     */
    createManualInboundDocumentResource: (
      manualInboundDocument: ManualInboundDocument,
      params: RequestParams = {}
    ) =>
      this.request<ManualInboundDocument, any>({
        path: `/api/warehouse/deliveries-v1/inbounddeliveries`,
        method: "POST",
        body: manualInboundDocument,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ManualInboundDocumentResource
     * @name GetManualInboundDocumentResource
     * @summary Get manual inbound document
     * @request GET:/api/warehouse/deliveries-v1/inbounddeliveries/{id}
     * @response `200` `ManualInboundDocument` the <code>ManualInboundDocument</code> document.
     */
    getManualInboundDocumentResource: (id: number, params: RequestParams = {}) =>
      this.request<ManualInboundDocument, any>({
        path: `/api/warehouse/deliveries-v1/inbounddeliveries/${id}`,
        method: "GET",
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ManualInboundDocumentResource
     * @name UpdateManualInboundDocumentResource
     * @summary Update manual inbound document
     * @request PUT:/api/warehouse/deliveries-v1/inbounddeliveries/{id}
     * @response `200` `ManualInboundDocument` the <code>ManualInboundDocument</code> document.
     */
    updateManualInboundDocumentResource: (
      id: number,
      manualInboundDocument: ManualInboundDocument,
      params: RequestParams = {}
    ) =>
      this.request<ManualInboundDocument, any>({
        path: `/api/warehouse/deliveries-v1/inbounddeliveries/${id}`,
        method: "PUT",
        body: manualInboundDocument,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description <p> When a Manual Inbound has been released, it is locked. The <code>note</code> field can still be updated using this endpoint.
     *
     * @tags ManualInboundDocumentResource
     * @name UpdateNote
     * @summary Update note on manual inbound document
     * @request PATCH:/api/warehouse/deliveries-v1/inbounddeliveries/{id}
     * @response `default` `void` Nothing.
     */
    updateNote: (
      id: number,
      manualInboundDocumentPatch: ManualInboundDocumentPatch,
      params: RequestParams = {}
    ) =>
      this.request<any, void>({
        path: `/api/warehouse/deliveries-v1/inbounddeliveries/${id}`,
        method: "PATCH",
        body: manualInboundDocumentPatch,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description <p> The document will be locked and bookkept. <p> The following error codes might be thrown: <dl> <dt>cannot_release_later_than_current_date</dt> <dd>Document date cannot be in the future.</dd> <dt>document_is_voided</dt> <dd>Document is voided.</dd> <dt>period_locked</dt> <dd>Document date is within a locked bookkeeping period.</dd> </dl>
     *
     * @tags ManualInboundDocumentResource
     * @name ReleaseManualInboundDocumentResource
     * @summary Release manual inbound document
     * @request PUT:/api/warehouse/deliveries-v1/inbounddeliveries/{id}/release
     * @response `default` `void` Nothing.
     */
    releaseManualInboundDocumentResource: (id: number, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/api/warehouse/deliveries-v1/inbounddeliveries/${id}/release`,
        method: "PUT",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description <p> A released manual inbound document might have connected outbounds, and can only be force voided. Note that a force void operation might cause a negative stock. <p> The following error codes might be thrown: <dl> <dt>void_linked_outbound</dt> <dd>If this document has any outbounds transactions connected to it.</dd> </dl>
     *
     * @tags ManualInboundDocumentResource
     * @name VoidDocument
     * @summary Void manual inbound document
     * @request PUT:/api/warehouse/deliveries-v1/inbounddeliveries/{id}/void
     * @response `default` `void` Nothing.
     */
    voidDocument: (
      id: number,
      query?: {
        /** true if we should force void, defaults to false */
        force?: boolean
        /**
         * date the void operation should be bookkeept on
         * @format date
         */
        customVoidDate?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<any, void>({
        path: `/api/warehouse/deliveries-v1/inbounddeliveries/${id}/void`,
        method: "PUT",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description <p> The <code>id</code> is set automatically.
     *
     * @tags ManualOutboundDocumentResource
     * @name CreateManualOutboundDocumentResource
     * @summary Create manual outbound document
     * @request POST:/api/warehouse/deliveries-v1/outbounddeliveries
     * @response `200` `ManualOutboundDocument` the <code>ManualOutboundDocument</code> document.
     */
    createManualOutboundDocumentResource: (
      manualOutboundDocument: ManualOutboundDocument,
      params: RequestParams = {}
    ) =>
      this.request<ManualOutboundDocument, any>({
        path: `/api/warehouse/deliveries-v1/outbounddeliveries`,
        method: "POST",
        body: manualOutboundDocument,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ManualOutboundDocumentResource
     * @name GetManualOutboundDocumentResource
     * @summary Get manual outbound document
     * @request GET:/api/warehouse/deliveries-v1/outbounddeliveries/{id}
     * @response `200` `ManualOutboundDocument` the <code>ManualOutboundDocument</code> document.
     */
    getManualOutboundDocumentResource: (id: number, params: RequestParams = {}) =>
      this.request<ManualOutboundDocument, any>({
        path: `/api/warehouse/deliveries-v1/outbounddeliveries/${id}`,
        method: "GET",
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description <p> HTTP code 400 cannot_modify_released_document HTTP code 400 document_is_voided Document is voided. HTTP code 404 not found
     *
     * @tags ManualOutboundDocumentResource
     * @name UpdateManualOutboundDocumentResource
     * @summary Update manual outbound document
     * @request PUT:/api/warehouse/deliveries-v1/outbounddeliveries/{id}
     * @response `200` `ManualOutboundDocument` the <code>ManualOutboundDocument</code> document.
     */
    updateManualOutboundDocumentResource: (
      id: number,
      manualOutboundDocument: ManualOutboundDocument,
      params: RequestParams = {}
    ) =>
      this.request<ManualOutboundDocument, any>({
        path: `/api/warehouse/deliveries-v1/outbounddeliveries/${id}`,
        method: "PUT",
        body: manualOutboundDocument,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description <p> When a Manual Outbound has been released, it is locked. The <code>note</code> field can still be updated using this endpoint.
     *
     * @tags ManualOutboundDocumentResource
     * @name UpdateNoteManualOutboundDocumentResource
     * @summary Update note on manual outbound document
     * @request PATCH:/api/warehouse/deliveries-v1/outbounddeliveries/{id}
     * @response `default` `void` Nothing.
     */
    updateNoteManualOutboundDocumentResource: (
      id: number,
      manualOutboundDocumentPatch: ManualOutboundDocumentPatch,
      params: RequestParams = {}
    ) =>
      this.request<any, void>({
        path: `/api/warehouse/deliveries-v1/outbounddeliveries/${id}`,
        method: "PATCH",
        body: manualOutboundDocumentPatch,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ManualOutboundDocumentResource
     * @name VoidDocumentManualOutboundDocumentResource
     * @summary Void manual outbound document
     * @request PUT:/api/warehouse/deliveries-v1/outbounddeliveries/{id}/void
     * @response `default` `void` Nothing.
     */
    voidDocumentManualOutboundDocumentResource: (
      id: number,
      query?: {
        /**
         * if provided this date will be used as the voided date instead of the document date
         * @format date
         */
        customVoidDate?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<any, void>({
        path: `/api/warehouse/deliveries-v1/outbounddeliveries/${id}/void`,
        method: "PUT",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description <p> The document will be locked and bookkept. <p> The following error codes might be thrown: <dl> <dt>cannot_release_later_than_current_date</dt> <dd>Document date cannot be in the future.</dd> <dt>document_is_voided</dt> <dd>Document is voided.</dd> <dt>period_locked</dt> <dd>Document date is within a locked bookkeeping period.</dd> </dl>
     *
     * @tags ManualOutboundDocumentResource
     * @name ReleaseManualOutboundDocumentResource
     * @summary Release manual outbound document
     * @request PUT:/api/warehouse/deliveries-v1/outbounddeliveries/{id}/release
     * @response `default` `void` Nothing.
     */
    releaseManualOutboundDocumentResource: (id: number, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/api/warehouse/deliveries-v1/outbounddeliveries/${id}/release`,
        method: "PUT",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomDocumentTypeResource
     * @name GetAllCustomDocumentTypeResource
     * @summary List custom document types
     * @request GET:/api/warehouse/documentdeliveries/custom/documenttypes-v1
     * @response `200` `CustomDocumentType` A list of <code>CustomDocumentTypes</code>
     */
    getAllCustomDocumentTypeResource: (params: RequestParams = {}) =>
      this.request<CustomDocumentType, any>({
        path: `/api/warehouse/documentdeliveries/custom/documenttypes-v1`,
        method: "GET",
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Create type, if it doesn't already exists. Note that new custom document types are created automatically when you create custom documents, so normally you do not need to call this method. Throws HTTP 400 <code>referenceTypeNotAllowed</code> if the name of the type is not allowed.
     *
     * @tags CustomDocumentTypeResource
     * @name CreateCustomDocumentTypeResource
     * @summary Create custom document type
     * @request POST:/api/warehouse/documentdeliveries/custom/documenttypes-v1
     * @response `200` `number` `1` if created, else `0` if type already exists.
     */
    createCustomDocumentTypeResource: (customDocumentType: CustomDocumentType, params: RequestParams = {}) =>
      this.request<number, any>({
        path: `/api/warehouse/documentdeliveries/custom/documenttypes-v1`,
        method: "POST",
        body: customDocumentType,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomDocumentTypeResource
     * @name GetCustomDocumentTypeResource
     * @summary Get custom document type
     * @request GET:/api/warehouse/documentdeliveries/custom/documenttypes-v1/{type}
     * @response `200` `CustomDocumentType` A <code>CustomDocumentType</code>
     */
    getCustomDocumentTypeResource: (type: string, params: RequestParams = {}) =>
      this.request<CustomDocumentType, any>({
        path: `/api/warehouse/documentdeliveries/custom/documenttypes-v1/${type}`,
        method: "GET",
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomInboundDocumentResource
     * @name GetCustomInboundDocumentResource
     * @summary Get custom inbound document
     * @request GET:/api/warehouse/documentdeliveries/custom/inbound-v1/{type}/{id}
     * @response `200` `CustomInboundDocument` The <code>CustomInboundDocument</code>.
     */
    getCustomInboundDocumentResource: (type: string, id: string, params: RequestParams = {}) =>
      this.request<CustomInboundDocument, any>({
        path: `/api/warehouse/documentdeliveries/custom/inbound-v1/${type}/${id}`,
        method: "GET",
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomInboundDocumentResource
     * @name Save
     * @summary Save custom inbound document
     * @request PUT:/api/warehouse/documentdeliveries/custom/inbound-v1/{type}/{id}
     * @response `200` `CustomInboundDocument` the stored <code>CustomInboundDocument</code>
     */
    save: (type: string, id: string, document: CustomInboundDocument, params: RequestParams = {}) =>
      this.request<CustomInboundDocument, any>({
        path: `/api/warehouse/documentdeliveries/custom/inbound-v1/${type}/${id}`,
        method: "PUT",
        body: document,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description The document will be locked and bookkept. The inbound deliveries will affect available stock.
     *
     * @tags CustomInboundDocumentResource
     * @name ReleaseCustomInboundDocumentResource
     * @summary Release custom inbound document
     * @request PUT:/api/warehouse/documentdeliveries/custom/inbound-v1/{type}/{id}/release
     * @response `default` `void` no content
     */
    releaseCustomInboundDocumentResource: (type: string, id: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/api/warehouse/documentdeliveries/custom/inbound-v1/${type}/${id}/release`,
        method: "PUT",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Voiding a document will undo the possible stock changes that the document had made, note that the document and the transactions created are not deleted. Some limitations apply, see below.
     *
     * @tags CustomInboundDocumentResource
     * @name VoidDocumentCustomInboundDocumentResource
     * @summary Void custom inbound document
     * @request PUT:/api/warehouse/documentdeliveries/custom/inbound-v1/{type}/{id}/void
     * @response `default` `void` no content
     */
    voidDocumentCustomInboundDocumentResource: (
      type: string,
      id: string,
      query?: {
        /** true if the document should be voided even if the document has connected outbounds, defaults to false. */
        force?: boolean
      },
      params: RequestParams = {}
    ) =>
      this.request<any, void>({
        path: `/api/warehouse/documentdeliveries/custom/inbound-v1/${type}/${id}/void`,
        method: "PUT",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomOutboundDocumentResource
     * @name GetCustomOutboundDocumentResource
     * @summary Get custom outbound document
     * @request GET:/api/warehouse/documentdeliveries/custom/outbound-v1/{type}/{id}
     * @response `200` `CustomOutboundDocument` the fetched <code>CustomOutboundDocument</code>
     */
    getCustomOutboundDocumentResource: (type: string, id: string, params: RequestParams = {}) =>
      this.request<CustomOutboundDocument, any>({
        path: `/api/warehouse/documentdeliveries/custom/outbound-v1/${type}/${id}`,
        method: "GET",
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description <br> If type is not known, it will be registered as belonging to the OUTBOUND category.<br> If type is an existing custom document type of category INBOUND an error is thrown.<br> If type is invalid an error is thrown.<br>
     *
     * @tags CustomOutboundDocumentResource
     * @name SaveCustomOutboundDocumentResource
     * @summary Save a custom outbound document
     * @request PUT:/api/warehouse/documentdeliveries/custom/outbound-v1/{type}/{id}
     * @response `200` `CustomOutboundDocument` the stored <code>CustomOutboundDocument</code>
     */
    saveCustomOutboundDocumentResource: (
      type: string,
      id: string,
      document: CustomOutboundDocument,
      params: RequestParams = {}
    ) =>
      this.request<CustomOutboundDocument, any>({
        path: `/api/warehouse/documentdeliveries/custom/outbound-v1/${type}/${id}`,
        method: "PUT",
        body: document,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomOutboundDocumentResource
     * @name ReleaseCustomOutboundDocumentResource
     * @summary Release custom outbound document
     * @request PUT:/api/warehouse/documentdeliveries/custom/outbound-v1/{type}/{id}/release
     * @response `default` `void` no content
     */
    releaseCustomOutboundDocumentResource: (type: string, id: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/api/warehouse/documentdeliveries/custom/outbound-v1/${type}/${id}/release`,
        method: "PUT",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomOutboundDocumentResource
     * @name VoidDocumentCustomOutboundDocumentResource
     * @summary Void custom outbound document
     * @request PUT:/api/warehouse/documentdeliveries/custom/outbound-v1/{type}/{id}/void
     * @response `default` `void` no content
     */
    voidDocumentCustomOutboundDocumentResource: (
      type: string,
      id: string,
      query?: {
        /** true if the document should be voided even if the document has connected outbounds, defaults to false. */
        force?: boolean
      },
      params: RequestParams = {}
    ) =>
      this.request<any, void>({
        path: `/api/warehouse/documentdeliveries/custom/outbound-v1/${type}/${id}/void`,
        method: "PUT",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ProductionOrderResource
     * @name GetAllProductionOrderResource
     * @summary List production orders
     * @request GET:/api/warehouse/productionorders-v1
     * @response `200` `ProductionOrder` A list of <code>ProductionOrders</code>.
     */
    getAllProductionOrderResource: (
      query?: {
        /**
         * Include only production orders with the given state.
         *               Allowed states: all, incomplete, delayed, completed, voided.
         *               (Default is incomplete)
         */
        state?: "all" | "incomplete" | "delayed" | "completed" | "voided"
        /** Include only production orders with the given production item. */
        itemId?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<ProductionOrder, any>({
        path: `/api/warehouse/productionorders-v1`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description <p> Set <code>itemId</code> to the item to be produced. <p> Set <code>quantity</code> to number of units to produce. <p> Set <code>startDate</code> to production start state. <p> ProductionState is set to <code>reserved</code> by default. It can also be <code>registered</code>. Then no reservations will be made (no quantities will be assigned to the <code>packageItems</code> yet). <p> Setting <code>outboundStockPointId</code> (where the <code>packageItems</code> will be taken from), and <code>inboundStockPointId</code> (where the produced item will be put) is mandatory multiple stockpoints has been activated in the warehouse settings. <p> Before the document is released, the <code>productionDate</code> must be set. <p> The <code>packageItems</code> to include is easiest to get by calling the method <code>getRequiredProductionParts</code>.
     *
     * @tags ProductionOrderResource
     * @name CreateProductionOrderResource
     * @summary Create a new production order
     * @request POST:/api/warehouse/productionorders-v1
     * @response `200` `ProductionOrder` the <code>ProductionOrder</code> document.
     */
    createProductionOrderResource: (productionOrder: ProductionOrder, params: RequestParams = {}) =>
      this.request<ProductionOrder, any>({
        path: `/api/warehouse/productionorders-v1`,
        method: "POST",
        body: productionOrder,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ProductionOrderResource
     * @name GetProductionOrderResource
     * @summary Get Production Order document
     * @request GET:/api/warehouse/productionorders-v1/{id}
     * @response `200` `ProductionOrder` the <code>ProductionOrder</code> document.
     */
    getProductionOrderResource: (id: number, params: RequestParams = {}) =>
      this.request<ProductionOrder, any>({
        path: `/api/warehouse/productionorders-v1/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description <p> Note that you must submit the full Production Order document when updating.
     *
     * @tags ProductionOrderResource
     * @name UpdateProductionOrderResource
     * @summary Update a production order
     * @request PUT:/api/warehouse/productionorders-v1/{id}
     * @response `200` `ProductionOrder` the <code>ProductionOrder</code> document.
     */
    updateProductionOrderResource: (
      id: number,
      productionOrder: ProductionOrder,
      params: RequestParams = {}
    ) =>
      this.request<ProductionOrder, any>({
        path: `/api/warehouse/productionorders-v1/${id}`,
        method: "PUT",
        body: productionOrder,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description <p> When a Production Order has been released it is locked. However, the <code>note</code> field can still be updated using this endpoint.
     *
     * @tags ProductionOrderResource
     * @name UpdateNoteProductionOrderResource
     * @summary Update the note of a production order
     * @request PATCH:/api/warehouse/productionorders-v1/{id}
     * @response `200` `ProductionOrder` the <code>ProductionOrder</code> document.
     */
    updateNoteProductionOrderResource: (
      id: number,
      productionOrderPatch: ProductionOrderPatch,
      params: RequestParams = {}
    ) =>
      this.request<ProductionOrder, any>({
        path: `/api/warehouse/productionorders-v1/${id}`,
        method: "PATCH",
        body: productionOrderPatch,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description <p> A released production order might have connected outbounds, and can only be force voided. Note that a force void operation might cause a negative stock.
     *
     * @tags ProductionOrderResource
     * @name VoidProductionOrder
     * @summary Void a production order
     * @request PUT:/api/warehouse/productionorders-v1/void/{id}
     * @response `default` `void` Nothing.
     */
    voidProductionOrder: (
      id: number,
      query?: {
        /** true to force void a released document, default false */
        force?: boolean
      },
      params: RequestParams = {}
    ) =>
      this.request<any, void>({
        path: `/api/warehouse/productionorders-v1/void/${id}`,
        method: "PUT",
        query: query,
        ...params,
      }),

    /**
     * @description <p> The document will be locked and bookkept. <p> The following error codes might be thrown: <dl> <dt>PRODUCTION_DATE_IS_EMPTY</dt> <dd>Production date cannot be empty.</dd> <dt>CANNOT_RELEASE_AFTER_CURRENT_DATE</dt> <dd>Document date cannot be in the future.</dd> <dt>DOCUMENT_IS_VOIDED</dt> <dd> The document has been voided and can no longer be modified.</dd> <dt>DOCUMENT_IS_RELEASED</dt> <dd>The document has already been released and can no longer be modified.</dd> <dt>DOCUMENT_NOT_FULLY_RESERVED</dt> <dd>The documents package items (BOMs, Bill Of Materials) has not been fully reserved (reserved quantity is not equal to total required quantity for one or more package item).</dd> </dl>
     *
     * @tags ProductionOrderResource
     * @name ReleaseProductionOrderResource
     * @summary Release a production order document
     * @request PUT:/api/warehouse/productionorders-v1/release/{id}
     * @response `200` `ProductionOrder` the <code>ProductionOrder</code> document.
     */
    releaseProductionOrderResource: (id: number, params: RequestParams = {}) =>
      this.request<ProductionOrder, any>({
        path: `/api/warehouse/productionorders-v1/release/${id}`,
        method: "PUT",
        format: "json",
        ...params,
      }),

    /**
     * @description <p> If no parameters are supplied, the <code>totalQuantityRequired</code> for producing 1 unit is returned. <p> Query parameter <code>quantity</code> can optionally be supplied, which will calculate <code>totalQuantityRequired</code>. <p> If query parameter <code>id</code> is supplied, it will get the quantity from that Production Order (the <code>quantity</code> query parameter is ignored if <code>id</code> is included).
     *
     * @tags ProductionOrderResource
     * @name GetRequiredProductionParts
     * @summary Get the package items (Bill Of Materials, BOMs) for a production article
     * @request GET:/api/warehouse/productionorders-v1/billofmaterials/{itemId:.*}
     * @response `200` `PackageItem` A list of <code>PackageItems</code>.
     */
    getRequiredProductionParts: (
      itemId: string,
      query?: {
        /**
         * the id of the production order (optional)
         * @format int64
         */
        id?: number
        /** the quantity of the production order (assumed 1 if left empty) */
        quantity?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<PackageItem, any>({
        path: `/api/warehouse/productionorders-v1/billofmaterials/{itemId:.*}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags IncomingGoodsResource
     * @name GetIncomingGoodsResource
     * @summary Get Incoming Goods document
     * @request GET:/api/warehouse/incominggoods-v1/{id}
     * @response `200` `IncomingGoods` The <code>IncomingGoods</code> document.
     */
    getIncomingGoodsResource: (
      id: number,
      query?: {
        /**
         * This Supplier Invoice id will be excluded when calculating the takenQuantity.
         * @format int64
         */
        ignoreSupplierInvoiceId?: number
      },
      params: RequestParams = {}
    ) =>
      this.request<IncomingGoods, any>({
        path: `/api/warehouse/incominggoods-v1/${id}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags IncomingGoodsResource
     * @name SaveIncomingGoodsResource
     * @summary Update Incoming Goods document
     * @request PUT:/api/warehouse/incominggoods-v1/{id}
     * @response `200` `IncomingGoods` The updated <code>IncomingGoods</code> document.
     */
    saveIncomingGoodsResource: (id: number, incomingGoods: IncomingGoods, params: RequestParams = {}) =>
      this.request<IncomingGoods, any>({
        path: `/api/warehouse/incominggoods-v1/${id}`,
        method: "PUT",
        body: incomingGoods,
        format: "json",
        ...params,
      }),

    /**
     * @description Perform a partial update of an <code>IncomingGoods</code> document. The partial update will update <code>note</code>, <code>deliveryNoteId</code>, <code>supplierName</code> and <code>hasDeliveryNote</code> It is possible to perform a partial update of a released/completed (TODO: ?) document.
     *
     * @tags IncomingGoodsResource
     * @name Patch
     * @summary Partial update Incoming Goods document
     * @request PATCH:/api/warehouse/incominggoods-v1/{id}
     * @response `200` `IncomingGoods` The updated <code>IncomingGoods</code> document.
     */
    patch: (id: number, incomingGoods: IncomingGoods, params: RequestParams = {}) =>
      this.request<IncomingGoods, any>({
        path: `/api/warehouse/incominggoods-v1/${id}`,
        method: "PATCH",
        body: incomingGoods,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description <p> List incoming goods documents matching the given parameters. </p> <p> Sortable fields: <code>id</code>, <code>has_delivery_note</code>, <code>delivery_note_id</code>, <code>supplier_number</code>, <code>date</code> </p>
     *
     * @tags IncomingGoodsResource
     * @name GetAllIncomingGoodsResource
     * @summary List Incoming Goods Documents
     * @request GET:/api/warehouse/incominggoods-v1/
     * @response `200` `(IncomingGoodsListRow)[]` A list of <code>IncomingGoods</code> documents.
     */
    getAllIncomingGoodsResource: (
      query?: {
        /**
         * `true` to include only released documents.
         *  `false` to include only non-released documents.
         */
        released?: boolean
        /**
         * `true` to include only completed documents.
         *  `false` to include only non-completed documents.
         */
        completed?: boolean
        /**
         * `true` to include only voided documents.
         *  `false` to include only non-voided documents.
         */
        voided?: boolean
        /** Include only documents with the given `supplierNumber`. */
        supplierNumber?: string
        /** Include only documents with the given `itemId`. */
        itemId?: string
        /** Include only documents where `note`-field contains the given text (case-insensitive). */
        note?: string
        /** Include only documents where `deliveryNote`-field contains the given text (case-insensitive). */
        deliveryNote?: string
        /** Include only documents where `id` or `deliveryNote`-field contains the given text (case-insensitive). */
        q?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<IncomingGoodsListRow[], any>({
        path: `/api/warehouse/incominggoods-v1/`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags IncomingGoodsResource
     * @name CreateIncomingGoodsResource
     * @summary Create Incoming Goods document
     * @request POST:/api/warehouse/incominggoods-v1/
     * @response `200` `IncomingGoods` The created <code>IncomingGoods</code> document.
     */
    createIncomingGoodsResource: (incomingGoods: IncomingGoods, params: RequestParams = {}) =>
      this.request<IncomingGoods, any>({
        path: `/api/warehouse/incominggoods-v1/`,
        method: "POST",
        body: incomingGoods,
        format: "json",
        ...params,
      }),

    /**
     * @description The document will be locked and bookkept. The inbound deliveries will affect available stock.
     *
     * @tags IncomingGoodsResource
     * @name ReleaseIncomingGoodsResource
     * @summary Release Incoming Goods document
     * @request PUT:/api/warehouse/incominggoods-v1/{id}/release
     * @response `default` `void` Nothing.
     */
    releaseIncomingGoodsResource: (id: number, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/api/warehouse/incominggoods-v1/${id}/release`,
        method: "PUT",
        ...params,
      }),

    /**
     * @description Mark a released Incoming Goods document as Completed. Bookkeeping will be finalized. A Completed Incoming Goods document cannot be matched against any more Supplier Invoices.
     *
     * @tags IncomingGoodsResource
     * @name Completed
     * @summary Complete Incoming Goods document
     * @request PUT:/api/warehouse/incominggoods-v1/{id}/completed
     * @response `default` `void` Nothing.
     */
    completed: (id: number, bookingDate: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/api/warehouse/incominggoods-v1/${id}/completed`,
        method: "PUT",
        body: bookingDate,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Void a document. If an Incoming Goods document has been Completed, or matched against Supplier Invoice, it cannot be voided.
     *
     * @tags IncomingGoodsResource
     * @name VoidDocumentIncomingGoodsResource
     * @summary Void Incoming Goods document
     * @request PUT:/api/warehouse/incominggoods-v1/{id}/void
     * @response `default` `void` Nothing.
     */
    voidDocumentIncomingGoodsResource: (id: number, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/api/warehouse/incominggoods-v1/${id}/void`,
        method: "PUT",
        ...params,
      }),

    /**
     * @description <p> List purchase orders matching the given parameters. </p> <p> Sortable fields: <code>id</code>, <code>supplier_number</code>, <code>order_date</code>, <code>internal_reference</code>, <code>response_state</code>, <code>delivery_date</code> </p>
     *
     * @tags PurchaseOrderResource
     * @name GetAllPurchaseOrderResource
     * @summary List Purchase Orders
     * @request GET:/api/warehouse/purchaseorders-v1
     * @response `200` `PurchaseOrder` A list of <code>PurchaseOrders</code>.
     */
    getAllPurchaseOrderResource: (
      query?: {
        /** Include only documents where `id` or `internalReference`-field contains the given text (case-insensitive). */
        q?: string
        /** Include only documents with the given `supplierNumber`. */
        supplierNumber?: string
        /** Include only documents with the given `purchaseOrderState`. */
        state?:
          | "NOT_SENT"
          | "SENT"
          | "SENT_NOT_REJECTED"
          | "DELAYED"
          | "RECEIVED"
          | "VOIDED"
          | "CURRENT"
          | "ALL"
        /** Include only documents with the given `itemId`. */
        itemId?: string
        /** Include only documents with the given `purchaseType` */
        purchaseType?: "WAREHOUSE" | "DROPSHIP"
        /** Include only documents where `internalReference' contains the given text (case-insensitive). */
        internalReference?: string
        /** Include only documents where `note`-field contains the given text (case-insensitive). */
        note?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<PurchaseOrder, any>({
        path: `/api/warehouse/purchaseorders-v1`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PurchaseOrderResource
     * @name CreatePurchaseOrderResource
     * @summary Create Purchase Order
     * @request POST:/api/warehouse/purchaseorders-v1
     * @response `200` `PurchaseOrder` The created <code>PurchaseOrder</code> document.
     */
    createPurchaseOrderResource: (purchaseOrder: PurchaseOrder, params: RequestParams = {}) =>
      this.request<PurchaseOrder, any>({
        path: `/api/warehouse/purchaseorders-v1`,
        method: "POST",
        body: purchaseOrder,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PurchaseOrderResource
     * @name GetCsvReport
     * @summary Get CSV list of Purchase Orders
     * @request GET:/api/warehouse/purchaseorders-v1/csv
     * @response `200` `string` A list of <code>PurchaseOrders</code>.
     */
    getCsvReport: (
      query?: {
        /** Include only documents where `id` or `internalReference`-field contains the given text (case-insensitive). */
        q?: string
        /** Include only documents with the given `supplierNumber`. */
        supplierNumber?: string
        /** Include only documents with the given `purchaseOrderState`. */
        state?:
          | "NOT_SENT"
          | "SENT"
          | "SENT_NOT_REJECTED"
          | "DELAYED"
          | "RECEIVED"
          | "VOIDED"
          | "CURRENT"
          | "ALL"
        /** Include only documents with the given `itemId`. */
        itemId?: string
        /** Include only documents with the given `purchaseType` */
        purchaseType?: "WAREHOUSE" | "DROPSHIP"
        /** Include only documents where `internalReference' contains the given text (case-insensitive). */
        internalReference?: string
        /** Include only documents where `note`-field contains the given text (case-insensitive). */
        note?: string
        /** True to include the purchase type column, default is false. */
        showPurchaseTypeColumn?: boolean
      },
      params: RequestParams = {}
    ) =>
      this.request<string, any>({
        path: `/api/warehouse/purchaseorders-v1/csv`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags PurchaseOrderResource
     * @name UpdateResponseState
     * @summary Update response state
     * @request PUT:/api/warehouse/purchaseorders-v1/{id}/response
     * @response `200` `PurchaseOrder` The updated <code>PurchaseOrder</code>
     */
    updateResponseState: (id: number, responseStateChange: ResponseStateChange, params: RequestParams = {}) =>
      this.request<PurchaseOrder, any>({
        path: `/api/warehouse/purchaseorders-v1/${id}/response`,
        method: "PUT",
        body: responseStateChange,
        format: "json",
        ...params,
      }),

    /**
     * @description <p> The purchase order will be treated as fully received. Any remaining quantity will be ignored.
     *
     * @tags PurchaseOrderResource
     * @name SetManuallyCompleted
     * @summary Manually complete Purchase Order
     * @request PUT:/api/warehouse/purchaseorders-v1/{id}/complete
     * @response `default` `void` Nothing.
     */
    setManuallyCompleted: (id: number, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/api/warehouse/purchaseorders-v1/${id}/complete`,
        method: "PUT",
        ...params,
      }),

    /**
     * @description <p> The dropship order will be treated as fully received. Any remaining quantity will be ignored.
     *
     * @tags PurchaseOrderResource
     * @name SetDropshipManuallyCompleted
     * @summary Manually complete dropship order
     * @request PUT:/api/warehouse/purchaseorders-v1/{id}/dropshipcomplete
     * @response `200` `ReleaseParentOrder` <code>ReleaseParentOrder</code> status for release of parent order
     */
    setDropshipManuallyCompleted: (id: number, params: RequestParams = {}) =>
      this.request<ReleaseParentOrder, any>({
        path: `/api/warehouse/purchaseorders-v1/${id}/dropshipcomplete`,
        method: "PUT",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PurchaseOrderResource
     * @name BatchUpdateResponseState
     * @summary Update response states
     * @request PUT:/api/warehouse/purchaseorders-v1/response
     * @response `200` `PurchaseOrder` a list of the updated <code>PurchaseOrders</code>
     */
    batchUpdateResponseState: (
      responseStateChange: ResponseStateChange,
      query?: {
        /** List of purchase order ids. */
        ids?: number[]
      },
      params: RequestParams = {}
    ) =>
      this.request<PurchaseOrder, any>({
        path: `/api/warehouse/purchaseorders-v1/response`,
        method: "PUT",
        query: query,
        body: responseStateChange,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PurchaseOrderResource
     * @name GetPurchaseOrderResource
     * @summary Get Purchase Order
     * @request GET:/api/warehouse/purchaseorders-v1/{id}
     * @response `200` `PurchaseOrder` The <code>PurchaseOrder</code>.
     */
    getPurchaseOrderResource: (
      id: number,
      query?: {
        /**
         * used for calculating the remaining ordered quantity. null will take the received quantity from all incoming goods
         * @format int64
         */
        ignoreIncomingGoodsId?: number
      },
      params: RequestParams = {}
    ) =>
      this.request<PurchaseOrder, any>({
        path: `/api/warehouse/purchaseorders-v1/${id}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PurchaseOrderResource
     * @name UpdatePurchaseOrderResource
     * @summary Update Purchase Order
     * @request PUT:/api/warehouse/purchaseorders-v1/{id}
     * @response `200` `PurchaseOrder` The updated <code>PurchaseOrder</code>.
     */
    updatePurchaseOrderResource: (id: number, purchaseOrder: PurchaseOrder, params: RequestParams = {}) =>
      this.request<PurchaseOrder, any>({
        path: `/api/warehouse/purchaseorders-v1/${id}`,
        method: "PUT",
        body: purchaseOrder,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description <p> Perform a partial update of a purchase order, see <code>PartialPurchaseOrder</code> for possible fields that are updateable.
     *
     * @tags PurchaseOrderResource
     * @name UpdatePartial
     * @summary Partial update Purchase Order
     * @request PATCH:/api/warehouse/purchaseorders-v1/{id}/partial
     * @response `200` `PartialPurchaseOrder` the updated <code>PartialPurchaseOrder</code>
     */
    updatePartial: (id: number, changes: PartialPurchaseOrder, params: RequestParams = {}) =>
      this.request<PartialPurchaseOrder, any>({
        path: `/api/warehouse/purchaseorders-v1/${id}/partial`,
        method: "PATCH",
        body: changes,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description <p> Sends the purchase order with the specified <code>id</code> to the recipient and sets the purchase order state to SENT
     *
     * @tags PurchaseOrderResource
     * @name SendPurchaseOrder
     * @summary Send purchase order via email
     * @request POST:/api/warehouse/purchaseorders-v1/{id}/send
     * @response `default` `void` the <code>PurchaseOrder</code>
     */
    sendPurchaseOrder: (id: number, settings: PurchaseOrderMailSettings, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/api/warehouse/purchaseorders-v1/${id}/send`,
        method: "POST",
        body: settings,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags PurchaseOrderResource
     * @name SendPurchaseOrders
     * @summary Sends multiple purchase orders via email
     * @request POST:/api/warehouse/purchaseorders-v1/sendpurchaseorders
     * @response `default` `void` Nothing.
     */
    sendPurchaseOrders: (purchaseOrderIds: number[], params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/api/warehouse/purchaseorders-v1/sendpurchaseorders`,
        method: "POST",
        body: purchaseOrderIds,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags PurchaseOrderResource
     * @name VoidDocumentPurchaseOrderResource
     * @summary Void Purchase Order
     * @request PUT:/api/warehouse/purchaseorders-v1/{id}/void
     * @response `default` `void` Nothing.
     */
    voidDocumentPurchaseOrderResource: (id: number, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/api/warehouse/purchaseorders-v1/${id}/void`,
        method: "PUT",
        ...params,
      }),

    /**
     * @description <p> Get a list of <code>DocumentReference</code> of linked/connected purchase orders to incoming goods and/or invoice document.
     *
     * @tags PurchaseOrderResource
     * @name GetMatchedDocuments
     * @summary List matched documents
     * @request GET:/api/warehouse/purchaseorders-v1/{id}/matches
     * @response `200` `DocumentReference` list of document references
     */
    getMatchedDocuments: (id: number, params: RequestParams = {}) =>
      this.request<DocumentReference, any>({
        path: `/api/warehouse/purchaseorders-v1/${id}/matches`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description <p> Get notes for a purchase order.
     *
     * @tags PurchaseOrderResource
     * @name GetAttachedNotes
     * @summary Get notes
     * @request GET:/api/warehouse/purchaseorders-v1/{id}/notes
     * @response `200` `PurchaseOrderRowNote` A list of <code>PurchaseOrderRowNotes</code>.
     */
    getAttachedNotes: (id: number, params: RequestParams = {}) =>
      this.request<PurchaseOrderRowNote, any>({
        path: `/api/warehouse/purchaseorders-v1/${id}/notes`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description <p> Get stock balance for each stockpoint. <p> Returns a list of <code>itemId</code>, <code>stockPointCode</code>, <code>availableStock</code>, <code>inStock</code>. <p> (The difference between <code>availableStock</code> and <code>inStock</code> is the reserved amount.)
     *
     * @tags StockStatusResource
     * @name GetStockBalance
     * @summary Get stock balance
     * @request GET:/api/warehouse/status-v1/stockbalance
     * @response `200` `StockBalance` A list of <code>StockBalances</code>.
     */
    getStockBalance: (
      query?: {
        /** Optional filter on itemIds (comma-separated) */
        itemIds?: string[]
        /** Optional filter on stock point codes (comma-separated). */
        stockPointCodes?: string[]
      },
      params: RequestParams = {}
    ) =>
      this.request<StockBalance, any>({
        path: `/api/warehouse/status-v1/stockbalance`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description <p> Sortable fields: <code>id</code>, <code>name</code>, <code>date</code>, <code>responsible</code>, <code>state</code> </p>
     *
     * @tags StockTakingResource
     * @name GetAllStockTakingResource
     * @summary List stock takings
     * @request GET:/api/warehouse/stocktaking-v1
     * @response `200` `StockTaking` A list of <code>StockTakings</code>.
     */
    getAllStockTakingResource: (
      query?: {
        /** Include only stock takings with the given state. */
        state?: "all" | "planning" | "started" | "completed" | "voided"
        /** Include only stock takings with the given item. */
        itemId?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<StockTaking, any>({
        path: `/api/warehouse/stocktaking-v1`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description <p> Create a new Stock Taking document. The only mandatory fields are <code>name</code> and <code>responsible</code>. <code>state</code> will be set to <code>planning</code> for a newly created document. <p> The <code>date</code>-field is not mandatory for documents in state <code>planning</code>. However, when you update the state to <code>started</code> you have to provide a date. <code>name</code> is a descriptive name of the stock taking. <code>responsible</code> is the name of the responsible for the stock taking. <code>rows</code> are added after creation by using the addRows-method. <code>projectId</code> and <code>costCenterCode</code> are used for book-keeping, when the Stock Taking document is released. <p> The field <code>usingStockPoints</code> is set from Warehouse system settings upon creation. If multiple stockpoints is used, then the rows will be per item-stockPoint-stockLocation. If multiple stockpoints is NOT used, then the rows will be per item-stockLocation.
     *
     * @tags StockTakingResource
     * @name CreateStockTakingResource
     * @summary Create stock taking
     * @request POST:/api/warehouse/stocktaking-v1
     * @response `200` `StockTaking` the created stock taking
     */
    createStockTakingResource: (stockTaking: StockTaking, params: RequestParams = {}) =>
      this.request<StockTaking, any>({
        path: `/api/warehouse/stocktaking-v1`,
        method: "POST",
        body: stockTaking,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StockTakingResource
     * @name GetStockTakingResource
     * @summary Get Stock Taking document
     * @request GET:/api/warehouse/stocktaking-v1/{id}
     * @response `200` `StockTaking` The <code>StockTaking</code> document.
     */
    getStockTakingResource: (id: number, params: RequestParams = {}) =>
      this.request<StockTaking, any>({
        path: `/api/warehouse/stocktaking-v1/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description <p> Updates can only be done when state is <code>planning</code> or <code>started</code>. <p> All updatable fields (<code>date</code>, <code>name</code>, <code>responsible</code>, <code>state</code>, <code>sortingId</code>, <code>costCenterCode</code>, <code>projectId</code>) in the document head are set to supplied values. <p> You cannot set <code>state</code> to <code>completed</code> or <code>voided</code>. Use endpoints release or void for this. <p> The <code>date</code>-field is mandatory for documents in state <code>started</code>. <p> When state is <code>started</code> you use this endpoint for setting the stock taken quantity. Only existing rows can be updated - no new rows will be created (use the addRows endpoint for this). Only the supplied rows will be updated. I.e. you don't have to send in <strong>all</strong> document rows - just supply the rows you want to set stockTakenQuantity for. Just make sure to always include all the fields from the document head as mentioned above. <p> The mandatory fields on the (optionally supplied) rows are: <code>itemId</code>, <code>stockPointId</code>, <code>stockLocationId</code>. Fields <code>countedBy</code> and <code>stockTakenQuantity</code> are technically not mandatory, but will be set to null if you don't supply them.
     *
     * @tags StockTakingResource
     * @name UpdateStockTakingResource
     * @summary Update a stock taking
     * @request PUT:/api/warehouse/stocktaking-v1/{id}
     * @response `200` `StockTaking` The <code>StockTaking</code> document.
     */
    updateStockTakingResource: (id: number, stockTaking: StockTaking, params: RequestParams = {}) =>
      this.request<StockTaking, any>({
        path: `/api/warehouse/stocktaking-v1/${id}`,
        method: "PUT",
        body: stockTaking,
        format: "json",
        ...params,
      }),

    /**
     * @description <p> Permanently deletes a Stock Taking document and its rows. <p> Only for documents in state <code>planning</code> and <code>started</code>.
     *
     * @tags StockTakingResource
     * @name DeleteStockTaking
     * @summary Delete Stock Taking document
     * @request DELETE:/api/warehouse/stocktaking-v1/{id}
     * @response `default` `void` Nothing.
     */
    deleteStockTaking: (id: number, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/api/warehouse/stocktaking-v1/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description <p> The document will be locked and bookkept. The Stock Taking document state will be set to <code>completed</code>. The stock amount will be adjusted according to the stock taken quantity.
     *
     * @tags StockTakingResource
     * @name ReleaseStockTakingResource
     * @summary Release Stock Taking document
     * @request PUT:/api/warehouse/stocktaking-v1/{id}/release
     * @response `default` `void` Nothing.
     */
    releaseStockTakingResource: (id: number, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/api/warehouse/stocktaking-v1/${id}/release`,
        method: "PUT",
        ...params,
      }),

    /**
     * @description <p> Sets the Stock Taking document state to <code>voided</code>. <p> Only documents in state <code>planning</code> and <code>started</code> can be voided. A <code>completed</code> document may not be voided.
     *
     * @tags StockTakingResource
     * @name VoidStockTaking
     * @summary Void Stock Taking document
     * @request PUT:/api/warehouse/stocktaking-v1/{id}/void
     * @response `default` `void` Nothing.
     */
    voidStockTaking: (id: number, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/api/warehouse/stocktaking-v1/${id}/void`,
        method: "PUT",
        ...params,
      }),

    /**
     * @description <p> A candidate row is a combination of itemId, stockPointId and stockLocationId that can be added to the Stock Taking document. <p> Rows already added to the Stock Taking are excluded from this list.
     *
     * @tags StockTakingResource
     * @name GetCandidateRows
     * @summary Get candidate rows
     * @request GET:/api/warehouse/stocktaking-v1/{id}/candidates
     * @response `200` `StockTakingRow` A list of <code>StockTakingRows</code>.
     */
    getCandidateRows: (
      id: number,
      query?: {
        itemIds?: string[]
        supplierNumbers?: string[]
        stockPointIds?: string[]
        stockLocationIds?: string[]
        /** @format date */
        transactionDate?: string
        itemIdSearch?: string
        itemDescriptionSearch?: string
        excludeZeroBalanceItems?: boolean
        /** Include items that do not exist on inbound deliveries. */
        includeNonInboundItems?: boolean
      },
      params: RequestParams = {}
    ) =>
      this.request<StockTakingRow, any>({
        path: `/api/warehouse/stocktaking-v1/${id}/candidates`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StockTakingResource
     * @name GetRows
     * @summary Get Stock Taking Rows
     * @request GET:/api/warehouse/stocktaking-v1/{id}/rows
     * @response `200` `StockTakingRow` A list of <code>StockTakingRows</code>.
     */
    getRows: (
      id: number,
      query?: {
        itemIds?: string[]
        supplierNumbers?: string[]
        stockPointIds?: string[]
        stockLocationIds?: string[]
        /** @format date */
        transactionDate?: string
        itemIdSearch?: string
        itemDescriptionSearch?: string
        excludeZeroBalanceItems?: boolean
        /** Secondary sorting column */
        secondarysortby?: string
        /** Secondary sorting order */
        secondaryorder?: string
        stateFilter?: "all" | "notStockTaken" | "stockTakenNoDeviation" | "stockTakenWithDeviation"
        /**
         * the row number to start the search from, used with startingItemId to jump to specific rows, can be empty
         * @format int32
         */
        startingRowNo?: number
        /** the itemId that should be on top of the rows list (used to jump to specific row), can be empty */
        startingItemId?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<StockTakingRow, any>({
        path: `/api/warehouse/stocktaking-v1/${id}/rows`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description <p> Add rows to a stock taking. If you add an already existing row noting happens.
     *
     * @tags StockTakingResource
     * @name AddStockTakingRows
     * @summary Add rows
     * @request POST:/api/warehouse/stocktaking-v1/{id}/rows
     * @response `default` `void` Nothing.
     */
    addStockTakingRows: (id: number, rows: StockTakingRow[], params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/api/warehouse/stocktaking-v1/${id}/rows`,
        method: "POST",
        body: rows,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description <p> Remove all rows matching the filter parameters from the Stock Taking document.
     *
     * @tags StockTakingResource
     * @name DeleteStockTakingRowByFilter
     * @summary Delete rows by filter
     * @request DELETE:/api/warehouse/stocktaking-v1/{id}/rows
     * @response `200` `number` number of deleted rows
     */
    deleteStockTakingRowByFilter: (
      id: number,
      query?: {
        itemIds?: string[]
        supplierNumbers?: string[]
        stockPointIds?: string[]
        stockLocationIds?: string[]
        /** @format date */
        transactionDate?: string
        itemIdSearch?: string
        itemDescriptionSearch?: string
        excludeZeroBalanceItems?: boolean
      },
      params: RequestParams = {}
    ) =>
      this.request<number, any>({
        path: `/api/warehouse/stocktaking-v1/${id}/rows`,
        method: "DELETE",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description <p> Add all matching candidate rows to a stock taking, as specified by filters.
     *
     * @tags StockTakingResource
     * @name AddStockTakingRowsByFilter
     * @summary Add rows by filter
     * @request POST:/api/warehouse/stocktaking-v1/{id}/addrows
     * @response `200` `number` Number of added rows.
     */
    addStockTakingRowsByFilter: (
      id: number,
      query?: {
        itemIds?: string[]
        supplierNumbers?: string[]
        stockPointIds?: string[]
        stockLocationIds?: string[]
        /** @format date */
        transactionDate?: string
        itemIdSearch?: string
        itemDescriptionSearch?: string
        excludeZeroBalanceItems?: boolean
        excludeNonInboundItems?: boolean
      },
      params: RequestParams = {}
    ) =>
      this.request<number, any>({
        path: `/api/warehouse/stocktaking-v1/${id}/addrows`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description <p> Remove single row by id from the Stock Taking document.
     *
     * @tags StockTakingResource
     * @name DeleteStockTakingRow
     * @summary Delete row
     * @request DELETE:/api/warehouse/stocktaking-v1/{id}/rows/{rowId:.*}
     * @response `200` `number` Number of deleted rows (1)
     */
    deleteStockTakingRow: (id: number, rowId: string, params: RequestParams = {}) =>
      this.request<number, any>({
        path: `/api/warehouse/stocktaking-v1/${id}/rows/{rowId:.*}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),
  }
  time = {
    /**
     * @description <p> <b>Response property descriptions:</b><br/> &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>id</i></b> - The unique id of a basic common combination of article registrations. (The basic common combination means "user/purchase date/customer/project/cost center", which leads to a dialog with several article registrations.)<br/> &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>purchaseDate</i></b> - The date on which the article is purchased or registered for charging.<br/> &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>ownerId</i></b> - The user ID who creates the basic common combination.<br/> &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>version</i></b> - The version of the basic common combination (article dialog) being updated, which is used for handling the concurrency issue.<br/> &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>registrationType</i></b> - It is always "ARTICLE" for article list endpoint.<br/> &nbsp;&nbsp;&nbsp;&nbsp;    <b>Sub-Class - ArticleRegistration:</b><br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>id</i></b> - The unique id of an article registration.<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>registrationId</i></b> - The id of the basic common combination.<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>orderIndex</i></b> - the order index for the article registration in regard of the common combination.<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>ownerId</i></b> - The user ID who owns the article registration.<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>totalQuantity</i></b> - The quantity of the article.<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>unitPrice</i></b> - The unit price connected to the article registration, which might be locked on an invoice/order basis or for non-invoiceable.<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>unitCost</i></b> - The unit cost connected to the article registration, which might be locked on an invoice/order basis.<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>invoiceBasisId</i></b> - The ID of invoice/order basis which is used for creating an invoice/order.<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>nonInvoiceable</i></b> - If the article registration would be ignored for charging or not.<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>note</i></b> - The note on the article registration.<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>documentId</i></b> - The document ID which includes the article registration and is created in Invoicing application.<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>documentType</i></b> - The document type which could be "invoice" or "order". </p>
     *
     * @tags ArticlesResource
     * @name List
     * @summary Get full article registrations that match filter
     * @request GET:/api/time/articles-v1
     * @response `200` `(BaseArticleRegistration)[]` list of article registrations  <code>BaseArticleRegistration</code>
     */
    list: (
      query?: {
        /**
         * The start date of the search span, the max of which should be 1 year to the end date ("toDate").
         *  Example: 2022-11-01
         * @format date
         */
        fromDate?: string
        /**
         * The end date of the search span, the max of which should be 1 year back to the start date ("fromDate").
         *  Example: 2022-11-30
         * @format date
         */
        toDate?: string
        /**
         * An array of customer IDs which are being used in database and in one-to-one relation with customer numbers.
         *  Example: 100,101,102
         */
        customerIds?: string[]
        /**
         * An array of project IDs.
         *  Example: p1,p2,p3
         */
        projectIds?: string[]
        /** If the article registration without project is included, or not. */
        includeRegistrationsWithoutProject?: boolean
        /**
         * An array of article IDs.
         *  Example: s1,s2,s3
         */
        itemIds?: string[]
        /**
         * An array of cost center IDs.
         *  Example: cc1,cc2,cc3
         */
        costCenterIds?: string[]
        /**
         * An array of user ids who own the article registrations.
         *  Example: 1,2,3
         */
        ownerIds?: string[]
        /** If a document is created with the article registration, or not. */
        invoiced?: boolean
        /** If the article registration is locked on an invoice basis, or not. */
        inInvoiceBasis?: boolean
        /** If the article registration is internal, which is registered on an internal customer, or not. */
        internalArticles?: boolean
        /** If the article registration has been moved to non-invoiceable, or not. */
        nonInvoiceable?: boolean
        /** If the price of the non-invoiceable article registration is included, or not. */
        includeNonInvoiceablePrice?: boolean
      },
      params: RequestParams = {}
    ) =>
      this.request<BaseArticleRegistration[], any>({
        path: `/api/time/articles-v1`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description <p> <b>Response property descriptions:</b><br/> &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>id</i></b> - The unique id of the registration.<br/> &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>userId</i></b> - The user ID who owns the registration.<br/> &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>workedDate</i></b> - The date for which the registration is created.<br/> &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>workedHours</i></b> - The time spent, or the time of absence.<br/> &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>invoiceText</i></b> - The text to be included in the invoice/order basis which would be used to create an invoice/order.<br/> &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>note</i></b> - The note on the registration.<br/> &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>chargeHours</i></b> - The time to be invoiced, or 0 for the absence, or locked for non-invoiceable.<br/> &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>childId</i></b> - The child ID related to the absence registration of parental leave (FPE), which comes from Payroll application.<br/> &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>nonInvoiceable</i></b> - If the registration would be ignored for charging or not.<br/> &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>invoiceBasisId</i></b> - The ID of invoice/order basis which is used for creating an invoice/order.<br/> &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>documentId</i></b> - The document ID which includes the registration and is created in Invoicing application.<br/> &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>documentType</i></b> - The document type which could be "invoice" or "order".<br/> &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>unitCost</i></b> - The unit cost from the registration owner who takes the work.<br/> &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>unitPrice</i></b> - The unit price for the service on the registration, which comes in priority from "invoice/order basis", "price group" or "service". <p>
     *
     * @tags RegistrationsResource
     * @name ListRegistrationsResource
     * @summary Get time/absence registrations that match filter
     * @request GET:/api/time/registrations-v2
     * @response `200` `(DetailedRegistration)[]` list of registrations <code>DetailedRegistration</code> <b>Note</b>: used by mobile client and in detailed chargeable units
     */
    listRegistrationsResource: (
      query?: {
        /**
         * The start date of the search span, the max of which should be 1 year to the end date ("toDate").
         *  Example: 2022-11-01
         * @format date
         */
        fromDate?: string
        /**
         * The end date of the search span, the max of which should be 1 year back to the start date ("fromDate").
         *  Example: 2022-11-30
         * @format date
         */
        toDate?: string
        /**
         * An array of customer IDs which are being used in database and in one-to-one relation with customer numbers.
         *  Example: 100,101,102
         */
        customerIds?: string[]
        /**
         * An array of project IDs.
         *  Example: p1,p2,p3
         */
        projectIds?: string[]
        /**
         * An array of service IDs.
         *  Example: s1,s2,s3
         */
        serviceIds?: string[]
        /**
         * An array of cost center IDs.
         *  Example: cc1,cc2,cc3
         */
        costCenterIds?: string[]
        /**
         * An array of registration codes.
         *  Example: TID,SEM,FPE
         */
        regCodes?: string[]
        /**
         * An array of user IDs that time/absence registrations belong to.
         *  Example: 1,2,3
         */
        userIds?: string[]
        /** If the time/absence registration without project is included, or not. */
        includeRegistrationsWithoutProject?: boolean
        /** If a document is created with the time/absence registration, or not. */
        invoiced?: boolean
        /** If the time/absence registration is locked on an invoice basis, or not. */
        inInvoiceBasis?: boolean
        /** If the time/absence registration is internal, which is registered on an internal customer, or not. */
        internalTime?: boolean
        /** If the time/absence registration has been moved to non-invoiceable, or not. */
        nonInvoiceable?: boolean
        /** If the price of the non-invoiceable time/absence registration is included, or not. */
        includeNonInvoiceableChargeHours?: boolean
      },
      params: RequestParams = {}
    ) =>
      this.request<DetailedRegistration[], any>({
        path: `/api/time/registrations-v2`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  }
  absencetransactions = {
    /**
     * @description Supports query-string parameters <strong>employeeid</strong> and <strong>date</strong> for filtering the result.
     *
     * @tags AbsenceTransactionsResource
     * @name ListAbsenceTransactionsResource
     * @summary Lists all absence transactions
     * @request GET:/3/absencetransactions
     * @response `200` `AbsenceTransactionListItemWrap` a list of absence transactions
     */
    listAbsenceTransactionsResource: (
      query?: {
        /** filter by employee id */
        employeeid?: string
        /** filter by date */
        date?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<AbsenceTransactionListItemWrap, any>({
        path: `/3/absencetransactions`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AbsenceTransactionsResource
     * @name CreateAbsenceTransactionsResource
     * @summary Create a new absence transaction
     * @request POST:/3/absencetransactions
     * @response `200` `AbsenceTransactionSingleItemWrap` the created absence transaction
     */
    createAbsenceTransactionsResource: (
      absenceTransactionsPayload: AbsenceTransactionPayloadWrap,
      params: RequestParams = {}
    ) =>
      this.request<AbsenceTransactionSingleItemWrap, any>({
        path: `/3/absencetransactions`,
        method: "POST",
        body: absenceTransactionsPayload,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a specific transaction
     *
     * @tags AbsenceTransactionsResource
     * @name GetAbsenceTransactionsResource
     * @summary Retrieve a specific absence transaction
     * @request GET:/3/absencetransactions/{id}
     * @response `200` `AbsenceTransactionSingleItemWrap` the absence transaction
     */
    getAbsenceTransactionsResource: (id: string, params: RequestParams = {}) =>
      this.request<AbsenceTransactionSingleItemWrap, any>({
        path: `/3/absencetransactions/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AbsenceTransactionsResource
     * @name UpdateAbsenceTransactionsResource
     * @summary Update a single absence transaction
     * @request PUT:/3/absencetransactions/{id}
     * @response `200` `AbsenceTransactionSingleItemWrap` the updated absence transaction
     */
    updateAbsenceTransactionsResource: (
      id: string,
      absenceTransactionsPayload: AbsenceTransactionPayloadWrap,
      params: RequestParams = {}
    ) =>
      this.request<AbsenceTransactionSingleItemWrap, any>({
        path: `/3/absencetransactions/${id}`,
        method: "PUT",
        body: absenceTransactionsPayload,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AbsenceTransactionsResource
     * @name Remove
     * @summary Delete an absence transaction
     * @request DELETE:/3/absencetransactions/{id}
     * @response `200` `AbsenceTransactionSingleItemWrap` empty
     */
    remove: (id: string, params: RequestParams = {}) =>
      this.request<AbsenceTransactionSingleItemWrap, any>({
        path: `/3/absencetransactions/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a list of absence transactions for an employee on a specific date and cause code.
     *
     * @tags AbsenceTransactionsResource
     * @name GetAbsenceTransactionsResource1
     * @summary Retrieve absence transactions
     * @request GET:/3/absencetransactions/{EmployeeId}/{Date}/{Code}
     * @response `200` `AbsenceTransactionListItemWrap` a list of absence transactions
     */
    getAbsenceTransactionsResource1: (
      employeeId: string,
      date: string,
      code:
        | "ASK"
        | "FPE"
        | "FRA"
        | "HAV"
        | "KOM"
        | "MIL"
        | "NAR"
        | "OS1"
        | "OS2"
        | "OS3"
        | "OS4"
        | "OS5"
        | "PAP"
        | "PEM"
        | "PER"
        | "SEM"
        | "SJK"
        | "SMB"
        | "SVE"
        | "TJL"
        | "UTB"
        | "VAB",
      params: RequestParams = {}
    ) =>
      this.request<AbsenceTransactionListItemWrap, any>({
        path: `/3/absencetransactions/${employeeId}/${date}/${code}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  }
  accountcharts = {
    /**
     * @description Retrieves a list of all the available account charts.
     *
     * @tags AccountChartsResource
     * @name ListAccountChartsResource
     * @summary List all account charts
     * @request GET:/3/accountcharts
     * @response `200` `AccountChartWrap` a list of account charts
     */
    listAccountChartsResource: (params: RequestParams = {}) =>
      this.request<AccountChartWrap, any>({
        path: `/3/accountcharts`,
        method: "GET",
        format: "json",
        ...params,
      }),
  }
  accounts = {
    /**
     * @description Retrieves the details of an account. You need to supply the unique account number that was returned when the account was created or retrieved from the list of accounts.
     *
     * @tags AccountsResource
     * @name GetAccountsResource
     * @summary Retrieve an account
     * @request GET:/3/accounts/{Number}
     * @response `200` `AccountSingleItemWrap` the existing account
     */
    getAccountsResource: (number: number, params: RequestParams = {}) =>
      this.request<AccountSingleItemWrap, any>({
        path: `/3/accounts/${number}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Updates the specified account with the values provided in the properties. Any property not provided will be left unchanged. Note that even though the account number is writeable you can&acute;t change the number of an existing account.
     *
     * @tags AccountsResource
     * @name UpdateAccountsResource
     * @summary Update an account
     * @request PUT:/3/accounts/{Number}
     * @response `200` `AccountSingleItemWrap` the updated account
     */
    updateAccountsResource: (
      number: number,
      accountPayload: AccountPayloadWrap,
      query?: {
        /**
         * financial year to update account against
         * @format int32
         */
        financialyear?: number
      },
      params: RequestParams = {}
    ) =>
      this.request<AccountSingleItemWrap, any>({
        path: `/3/accounts/${number}`,
        method: "PUT",
        query: query,
        body: accountPayload,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description The accounts are returned sorted by account number with the lowest number appearing first.
     *
     * @tags AccountsResource
     * @name ListAccountsResource
     * @summary List all accounts
     * @request GET:/3/accounts/
     * @response `200` `AccountListItemWrap` list of accounts
     */
    listAccountsResource: (
      query?: {
        lastmodified?: string
        /** @format int32 */
        sru?: number
        /** field to sort returned list on */
        sortby?: "number"
      },
      params: RequestParams = {}
    ) =>
      this.request<AccountListItemWrap, any>({
        path: `/3/accounts/`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description The created account will be returned if everything succeeded, if there was any problems an error will be returned.
     *
     * @tags AccountsResource
     * @name CreateAccountsResource
     * @summary Create an account
     * @request POST:/3/accounts/
     * @response `200` `AccountSingleItemWrap` the created account
     */
    createAccountsResource: (
      accountPayload: AccountPayloadWrap,
      query?: {
        /**
         * financial year to create account against
         * @format int32
         */
        financialyear?: number
      },
      params: RequestParams = {}
    ) =>
      this.request<AccountSingleItemWrap, any>({
        path: `/3/accounts/`,
        method: "POST",
        query: query,
        body: accountPayload,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  }
  archive = {
    /**
     * @description If no path is provided the root will be returned. Providing fileId will return given file from fileattachments.
     *
     * @tags ArchiveResource
     * @name GetFolder
     * @summary Retrieve folder or file
     * @request GET:/3/archive/
     * @response `200` `FolderWrap` a single folder
     */
    getFolder: (
      query?: {
        /** name of folder */
        path?: string
        /** fileId from fileattachments */
        fileid?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<FolderWrap, any>({
        path: `/3/archive/`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description If not path or folderId is provided, the file will be uploaded to the root directory.
     *
     * @tags ArchiveResource
     * @name UploadFile
     * @summary Upload a file to a specific subdirectory
     * @request POST:/3/archive/
     * @response `200` `FolderFileRowWrap` the uploaded file
     */
    uploadFile: (
      data: {
        /** file to uplad */
        file?: object
      },
      query?: {
        /** name of folder */
        path?: string
        /** id of folder */
        folderid?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<FolderFileRowWrap, any>({
        path: `/3/archive/`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * @description Please note that removing a folder will also resulting in removal of all the contents within!
     *
     * @tags ArchiveResource
     * @name RemoveByPath
     * @summary Remove files
     * @request DELETE:/3/archive/
     * @response `default` `void` empty
     */
    removeByPath: (
      query?: {
        /** identifies file/folder to remove */
        path?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<any, void>({
        path: `/3/archive/`,
        method: "DELETE",
        query: query,
        ...params,
      }),

    /**
     * @description Providing fileId will return given file from fileattachments.
     *
     * @tags ArchiveResource
     * @name GetFileById
     * @summary Retrieve a single file
     * @request GET:/3/archive/{id}
     * @response `200` `string` a single file
     */
    getFileById: (
      id: string,
      query?: {
        /** fileId from fileattachments */
        fileid?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<string, any>({
        path: `/3/archive/${id}`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ArchiveResource
     * @name RemoveById
     * @summary Delete a single file
     * @request DELETE:/3/archive/{id}
     * @response `default` `void` empty
     */
    removeById: (id: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/3/archive/${id}`,
        method: "DELETE",
        ...params,
      }),
  }
  articlefileconnections = {
    /**
     * @description The article file connections register can return a list of records or a single record. By specifying a FileId in the URL, a single record will be returned. Not specifying a FileId will return a list of records.
     *
     * @tags ArticleFileConnectionsResource
     * @name ListArticleFileConnectionsResource
     * @summary Retrieve a list of article file connections
     * @request GET:/3/articlefileconnections/
     * @response `200` `ArticleFileConnectionListItemWrap` a list of article file connections.
     */
    listArticleFileConnectionsResource: (params: RequestParams = {}) =>
      this.request<ArticleFileConnectionListItemWrap, any>({
        path: `/3/articlefileconnections/`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ArticleFileConnectionsResource
     * @name CreateArticleFileConnectionsResource
     * @summary Create an article file connection
     * @request POST:/3/articlefileconnections/
     * @response `200` `ArticleFileConnectionWrap` the created article file connection
     */
    createArticleFileConnectionsResource: (
      articleFileConnection: ArticleFileConnectionWrap,
      params: RequestParams = {}
    ) =>
      this.request<ArticleFileConnectionWrap, any>({
        path: `/3/articlefileconnections/`,
        method: "POST",
        body: articleFileConnection,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ArticleFileConnectionsResource
     * @name GetArticleFileConnectionsResource
     * @summary Retrieve a single article file connection
     * @request GET:/3/articlefileconnections/{FileId}
     * @response `200` `ArticleFileConnectionWrap` the existing article file connection
     */
    getArticleFileConnectionsResource: (fileId: string, params: RequestParams = {}) =>
      this.request<ArticleFileConnectionWrap, any>({
        path: `/3/articlefileconnections/${fileId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ArticleFileConnectionsResource
     * @name RemoveArticleFileConnectionsResource
     * @summary Remove an article file connection
     * @request DELETE:/3/articlefileconnections/{FileId}
     * @response `default` `void` empty
     */
    removeArticleFileConnectionsResource: (fileId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/3/articlefileconnections/${fileId}`,
        method: "DELETE",
        ...params,
      }),
  }
  articles = {
    /**
     * @description Retrieves the details of an article. You need to supply the unique article number that was returned when the article was created or retrieved from the list of articles.
     *
     * @tags ArticlesResource_articles
     * @name GetArticlesResourceArticles
     * @summary Retrieve an article
     * @request GET:/3/articles/{ArticleNumber}
     * @response `200` `ArticleWrap` the existing article
     */
    getArticlesResourceArticles: (articleNumber: number | string, params: RequestParams = {}) =>
      this.request<ArticleWrap, any>({
        path: `/3/articles/${articleNumber}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Updates the specified article with the values provided in the properties. Any property not provided will be left unchanged. You need to supply the unique article number that was returned when the article was created or retrieved from the list of articles. Note that even though the article number is writeable you can not change the number of an existing article.
     *
     * @tags ArticlesResource_articles
     * @name UpdateArticlesResourceArticles
     * @summary Update an article
     * @request PUT:/3/articles/{ArticleNumber}
     * @response `200` `ArticleWrap` the updated article
     */
    updateArticlesResourceArticles: (
      articleNumber: number,
      article: ArticleWrap,
      params: RequestParams = {}
    ) =>
      this.request<ArticleWrap, any>({
        path: `/3/articles/${articleNumber}`,
        method: "PUT",
        body: article,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description <p>Deletes the article permanently.</p> <p>You need to supply the unique article number that was returned when the article was created or retrieved from the list of articles.</p>
     *
     * @tags ArticlesResource_articles
     * @name RemoveArticlesResourceArticles
     * @summary Delete an article
     * @request DELETE:/3/articles/{ArticleNumber}
     * @response `default` `void` empty
     */
    removeArticlesResourceArticles: (articleNumber: number, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/3/articles/${articleNumber}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Retrieves a list of articles. The articles are returned sorted by article number with the lowest number appearing first.
     *
     * @tags ArticlesResource_articles
     * @name ListArticlesResourceArticles
     * @summary Retrieve a list of articles
     * @request GET:/3/articles
     * @response `200` `ArticleListItemList` list of articles
     */
    listArticlesResourceArticles: (
      query?: {
        /** possibility to filter supplier invoices */
        filter?: "active" | "inactive"
        /** filter by article number */
        articlenumber?: string
        /** filter by description */
        description?: string
        /** filter by ean */
        ean?: string
        /** filter by supplier number */
        suppliernumber?: string
        /** filter by manufacturer */
        manufacturer?: string
        /** filter by manufacturerarticlenumber */
        manufacturerarticlenumber?: string
        /** filter by web shop */
        webshop?: string
        /** filter by lastmodified */
        lastmodified?: string
        /** field to sort returned list */
        sortby?: "articlenumber" | "quantityinstock" | "reservedquantity" | "stockvalue"
        /** filter by page */
        page?: number
      },
      params: RequestParams = {}
    ) =>
      this.request<ArticleListItemList, any>({
        path: `/3/articles`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description The created article will be returned if everything succeeded, if there was any problems an error will be returned.
     *
     * @tags ArticlesResource_articles
     * @name CreateArticlesResourceArticles
     * @summary Create an article
     * @request POST:/3/articles
     * @response `200` `ArticleWrap` the created article
     */
    createArticlesResourceArticles: (article: ArticleWrap, params: RequestParams = {}) =>
      this.request<ArticleWrap, any>({
        path: `/3/articles`,
        method: "POST",
        body: article,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  }
  assetfileconnections = {
    /**
     * @description The asset register can return a list of assets or a single asset. By specifying a FileId in the URL, a single asset will be returned. Not specifying a FileId will return a list of records.
     *
     * @tags AssetFileConnectionResource
     * @name GetAllAssetFileConnectionResource
     * @summary Retrieve a list of asset file connections
     * @request GET:/3/assetfileconnections
     * @response `200` `AssetFileConnectionResponse` list of asset file connections
     */
    getAllAssetFileConnectionResource: (params: RequestParams = {}) =>
      this.request<AssetFileConnectionResponse, any>({
        path: `/3/assetfileconnections`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AssetFileConnectionResource
     * @name CreateAssetFileConnectionResource
     * @summary Create an asset file connection
     * @request POST:/3/assetfileconnections
     * @response `200` `AssetFileConnection` asset file connection
     */
    createAssetFileConnectionResource: (
      assetFileConnection: CreateAssetFileConnection,
      params: RequestParams = {}
    ) =>
      this.request<AssetFileConnection, any>({
        path: `/3/assetfileconnections`,
        method: "POST",
        body: assetFileConnection,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AssetFileConnectionResource
     * @name DeleteAssetFileConnectionResource
     * @summary Remove an asset file connection
     * @request DELETE:/3/assetfileconnections/{fileId}
     * @response `default` `void` empty
     */
    deleteAssetFileConnectionResource: (fileId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/3/assetfileconnections/${fileId}`,
        method: "DELETE",
        ...params,
      }),
  }
  assets = {
    /**
     * No description
     *
     * @tags AssetsResource
     * @name ListAssetsResource
     * @summary Retrieve a list of assets
     * @request GET:/3/assets/
     * @response `200` `ListAssetWrap` list of assets
     */
    listAssetsResource: (params: RequestParams = {}) =>
      this.request<ListAssetWrap, any>({
        path: `/3/assets/`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description The created asset will be returned if everything succeeded, if there was any problems an error will be returned.
     *
     * @tags AssetsResource
     * @name CreateAssetsResource
     * @summary Create an Asset
     * @request POST:/3/assets/
     * @response `200` `AssetSingle` asset
     */
    createAssetsResource: (asset: CreateAssetWrap, params: RequestParams = {}) =>
      this.request<AssetSingle, any>({
        path: `/3/assets/`,
        method: "POST",
        body: asset,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AssetsResource
     * @name GetAssetsResource
     * @summary Retrieve a single asset
     * @request GET:/3/assets/{GivenNumber}
     * @response `200` `AssetSingle` asset
     */
    getAssetsResource: (givenNumber: string, params: RequestParams = {}) =>
      this.request<AssetSingle, any>({
        path: `/3/assets/${givenNumber}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description The updated asset will be returned if everything succeeded, if there was any problems an error will be returned.
     *
     * @tags AssetsResource
     * @name ChangeManualObValue
     * @summary Change manual OB value of an Asset
     * @request PUT:/3/assets/{GivenNumber}
     * @response `200` `AssetSingle` asset
     */
    changeManualObValue: (givenNumber: string, asset: ManualObAsset, params: RequestParams = {}) =>
      this.request<AssetSingle, any>({
        path: `/3/assets/${givenNumber}`,
        method: "PUT",
        body: asset,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description By specifying a {GivenNumber} in the URL a single &quot;Not active&quot; asset or asset with a type &quot;Not depreciable&quot; can be deleted. By specifying a {GivenNumber} in the URL a single &quot;Active&quot; or &quot;Fully depreciated&quot; assets can be voided and in this case in request body voiddate should be provided, otherwise it will use todays date.
     *
     * @tags AssetsResource
     * @name DeleteAssetsResource
     * @summary Delete or Void an Asset
     * @request DELETE:/3/assets/{GivenNumber}
     * @response `default` `void` asset
     */
    deleteAssetsResource: (givenNumber: string, request: DeleteWrap, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/3/assets/${givenNumber}`,
        method: "DELETE",
        body: request,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Retrieves a list of assets to depreciate.
     *
     * @tags AssetsResource
     * @name GetDeprecationList
     * @summary Assets depreciation list
     * @request GET:/3/assets/depreciations/{ToDate}
     * @response `200` `ListAssetWrap` list of assets
     */
    getDeprecationList: (toDate: string, params: RequestParams = {}) =>
      this.request<ListAssetWrap, any>({
        path: `/3/assets/depreciations/${toDate}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description The updated asset will be returned if everything succeeded, if there was any problems an error will be returned.
     *
     * @tags AssetsResource
     * @name WriteUp
     * @summary Write up an Asset
     * @request PUT:/3/assets/writeup/{GivenNumber}
     * @response `200` `AssetSingle` asset
     */
    writeUp: (givenNumber: string, asset: WriteUpWrap, params: RequestParams = {}) =>
      this.request<AssetSingle, any>({
        path: `/3/assets/writeup/${givenNumber}`,
        method: "PUT",
        body: asset,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description The updated asset will be returned if everything succeeded, if there was any problems an error will be returned.
     *
     * @tags AssetsResource
     * @name WriteDown
     * @summary Write down an Asset
     * @request PUT:/3/assets/writedown/{GivenNumber}
     * @response `200` `AssetSingle` asset
     */
    writeDown: (givenNumber: string, asset: WriteDownWrap, params: RequestParams = {}) =>
      this.request<AssetSingle, any>({
        path: `/3/assets/writedown/${givenNumber}`,
        method: "PUT",
        body: asset,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description The updated asset will be returned if everything succeeded, if there was any problems an error will be returned.
     *
     * @tags AssetsResource
     * @name Scrap
     * @summary Scrap an Asset
     * @request PUT:/3/assets/scrap/{GivenNumber}
     * @response `200` `AssetSingle` asset
     */
    scrap: (givenNumber: string, asset: ScrapWrap, params: RequestParams = {}) =>
      this.request<AssetSingle, any>({
        path: `/3/assets/scrap/${givenNumber}`,
        method: "PUT",
        body: asset,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Partial sell or full sell of an asset.
     *
     * @tags AssetsResource
     * @name Sell
     * @summary Sell an Asset
     * @request PUT:/3/assets/sell/{GivenNumber}
     * @response `200` `AssetSingle` asset
     */
    sell: (givenNumber: string, asset: SellWrap, params: RequestParams = {}) =>
      this.request<AssetSingle, any>({
        path: `/3/assets/sell/${givenNumber}`,
        method: "PUT",
        body: asset,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description The created vouchers list will be returned if everything succeeded, if there was any problems an error will be returned.
     *
     * @tags AssetsResource
     * @name Depreciate
     * @summary Perform a Depreciation of an Asset
     * @request POST:/3/assets/depreciate
     * @response `200` `DepreciationResponseWrap` response
     */
    depreciate: (body: DepreciationWrap, params: RequestParams = {}) =>
      this.request<DepreciationResponseWrap, any>({
        path: `/3/assets/depreciate`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AssetTypesResource
     * @name GetAssetTypesResource
     * @summary Retrieve an asset type
     * @request GET:/3/assets/types/{id}
     * @response `200` `AssetTypeWrapSingle` asset type
     */
    getAssetTypesResource: (id: number, params: RequestParams = {}) =>
      this.request<AssetTypeWrapSingle, any>({
        path: `/3/assets/types/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AssetTypesResource
     * @name CreateAssetTypesResource
     * @summary Create an asset type
     * @request POST:/3/assets/types/{id}
     * @response `200` `AssetTypeWrapSingle` response
     */
    createAssetTypesResource: (id: number, createAssetRequest: CreateAssetWrap, params: RequestParams = {}) =>
      this.request<AssetTypeWrapSingle, any>({
        path: `/3/assets/types/${id}`,
        method: "POST",
        body: createAssetRequest,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AssetTypesResource
     * @name UpdateAssetTypesResource
     * @summary Update an asset type
     * @request PUT:/3/assets/types/{id}
     * @response `200` `AssetTypeWrapSingle` response
     */
    updateAssetTypesResource: (id: number, updateAssetRequest: UpdateAssetWrap, params: RequestParams = {}) =>
      this.request<AssetTypeWrapSingle, any>({
        path: `/3/assets/types/${id}`,
        method: "PUT",
        body: updateAssetRequest,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AssetTypesResource
     * @name DeleteAssetTypesResource
     * @summary Delete an asset type
     * @request DELETE:/3/assets/types/{id}
     * @response `default` `void` empty
     */
    deleteAssetTypesResource: (id: number, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/3/assets/types/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AssetTypesResource
     * @name GetAllAssetTypesResource
     * @summary Retrieve a list of asset types
     * @request GET:/3/assets/types/
     * @response `200` `AssetTypeWrapList` asset types
     */
    getAllAssetTypesResource: (params: RequestParams = {}) =>
      this.request<AssetTypeWrapList, any>({
        path: `/3/assets/types/`,
        method: "GET",
        format: "json",
        ...params,
      }),
  }
  attendancetransactions = {
    /**
     * @description Supports query-string parameters <strong>employeeid</strong> and <strong>date</strong> for filtering the result.
     *
     * @tags AttendanceTransactionsResource
     * @name ListAttendanceTransactionsResource
     * @summary Lists all attendance transactions
     * @request GET:/3/attendancetransactions
     * @response `200` `AttendanceTransactionListItemList` a list of attendance transactions
     */
    listAttendanceTransactionsResource: (
      query?: {
        /** filter by employee id */
        employeeid?: string
        /** filter by date */
        date?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<AttendanceTransactionListItemList, any>({
        path: `/3/attendancetransactions`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AttendanceTransactionsResource
     * @name CreateAttendanceTransactionsResource
     * @summary Create a new attendance transaction
     * @request POST:/3/attendancetransactions
     * @response `200` `AttendanceTransactionWrap` the created attendance transaction
     */
    createAttendanceTransactionsResource: (
      attendanceTransaction: AttendanceTransactionWrap,
      params: RequestParams = {}
    ) =>
      this.request<AttendanceTransactionWrap, any>({
        path: `/3/attendancetransactions`,
        method: "POST",
        body: attendanceTransaction,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a specific transaction
     *
     * @tags AttendanceTransactionsResource
     * @name GetAttendanceTransactionsResource
     * @summary Retrieve a specific attendance transaction
     * @request GET:/3/attendancetransactions/{id}
     * @response `200` `AttendanceTransactionWrap` the attendance transaction
     */
    getAttendanceTransactionsResource: (id: string, params: RequestParams = {}) =>
      this.request<AttendanceTransactionWrap, any>({
        path: `/3/attendancetransactions/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AttendanceTransactionsResource
     * @name UpdateAttendanceTransactionsResource
     * @summary Update a single attendance transaction
     * @request PUT:/3/attendancetransactions/{id}
     * @response `200` `AttendanceTransactionWrap` the updated attendance transaction
     */
    updateAttendanceTransactionsResource: (
      id: string,
      attendanceTransaction: AttendanceTransactionWrap,
      params: RequestParams = {}
    ) =>
      this.request<AttendanceTransactionWrap, any>({
        path: `/3/attendancetransactions/${id}`,
        method: "PUT",
        body: attendanceTransaction,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  }
  companyinformation = {
    /**
     * No description
     *
     * @tags CompanyInformationResource
     * @name GetCompanyInformationResource
     * @summary Retrieve the Company Information
     * @request GET:/3/companyinformation
     * @response `200` `CompanyInfoWrap` company information
     */
    getCompanyInformationResource: (params: RequestParams = {}) =>
      this.request<CompanyInfoWrap, any>({
        path: `/3/companyinformation`,
        method: "GET",
        format: "json",
        ...params,
      }),
  }
  settings = {
    /**
     * No description
     *
     * @tags CompanySettingsResource
     * @name GetCompanySettingsResource
     * @summary Retrieve the company settings
     * @request GET:/3/settings/company/
     * @response `200` `CompanySettingsWrap` company settings
     */
    getCompanySettingsResource: (params: RequestParams = {}) =>
      this.request<CompanySettingsWrap, any>({
        path: `/3/settings/company/`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description If no date is returned, no period is locked.
     *
     * @tags LockedPeriodResource
     * @name GetLockedPeriodResource
     * @summary Retrieve the locked period
     * @request GET:/3/settings/lockedperiod/
     * @response `200` `LockedPeriodWrap` the locked period
     */
    getLockedPeriodResource: (params: RequestParams = {}) =>
      this.request<LockedPeriodWrap, any>({
        path: `/3/settings/lockedperiod/`,
        method: "GET",
        format: "json",
        ...params,
      }),
  }
  contractaccruals = {
    /**
     * @description The contract accruals register can return a list of records or a single record. By specifying a DocumentNumber in the URL, a single record will be returned. Not specifying a DocumentNumber will return a list of records.
     *
     * @tags ContractAccrualsResource
     * @name ListContractAccrualsResource
     * @summary Retrieve a list of contract accruals
     * @request GET:/3/contractaccruals/
     * @response `200` `ContractAccrualListItemList` list of contract accruals
     */
    listContractAccrualsResource: (params: RequestParams = {}) =>
      this.request<ContractAccrualListItemList, any>({
        path: `/3/contractaccruals/`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ContractAccrualsResource
     * @name CreateContractAccrualsResource
     * @summary Create a contract accrual
     * @request POST:/3/contractaccruals/
     * @response `200` `ContractAccrualWrap` the created contract accrual
     */
    createContractAccrualsResource: (contractAccrual: ContractAccrualWrap, params: RequestParams = {}) =>
      this.request<ContractAccrualWrap, any>({
        path: `/3/contractaccruals/`,
        method: "POST",
        body: contractAccrual,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ContractAccrualsResource
     * @name GetContractAccrualsResource
     * @summary Retrieve a single contract accrual
     * @request GET:/3/contractaccruals/{DocumentNumber}
     * @response `200` `ContractAccrualWrap` the existing contract accrual
     */
    getContractAccrualsResource: (documentNumber: number, params: RequestParams = {}) =>
      this.request<ContractAccrualWrap, any>({
        path: `/3/contractaccruals/${documentNumber}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ContractAccrualsResource
     * @name UpdateContractAccrualsResource
     * @summary Update a contract accrual
     * @request PUT:/3/contractaccruals/{DocumentNumber}
     * @response `200` `ContractAccrualWrap` the updated contract accrual
     */
    updateContractAccrualsResource: (
      documentNumber: number,
      contractAccrual: ContractAccrualWrap,
      params: RequestParams = {}
    ) =>
      this.request<ContractAccrualWrap, any>({
        path: `/3/contractaccruals/${documentNumber}`,
        method: "PUT",
        body: contractAccrual,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ContractAccrualsResource
     * @name RemoveContractAccrualsResource
     * @summary Remove a contract accrual
     * @request DELETE:/3/contractaccruals/{DocumentNumber}
     * @response `default` `void` empty
     */
    removeContractAccrualsResource: (documentNumber: number, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/3/contractaccruals/${documentNumber}`,
        method: "DELETE",
        ...params,
      }),
  }
  contracts = {
    /**
     * No description
     *
     * @tags ContractsResource
     * @name GetContractsResource
     * @summary Retrieve a single contract
     * @request GET:/3/contracts/{DocumentNumber}
     * @response `200` `ContractWrap` the existing contract
     */
    getContractsResource: (documentNumber: string, params: RequestParams = {}) =>
      this.request<ContractWrap, any>({
        path: `/3/contracts/${documentNumber}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Note that there are two approaches for updating the rows on a contract. If RowId is not specified on any row, the rows will be mapped and updated in the order in which they are set in the array. All rows that should remain on the contract needs to be provided. If RowId is specified on one or more rows the following goes: Corresponding row with that id will be updated. The rows without RowId will be interpreted as new rows. If a row should not be updated but remain on the contract then specify only RowId like { "RowId": 123 }, otherwise it will be removed. Note that new RowIds are generated for all rows every time a contract is updated. When the InvoiceDiscount value is set on the rows and the Contract, the value set on the Contract takes precedence over the row-level InvoiceDiscount.
     *
     * @tags ContractsResource
     * @name UpdateContractsResource
     * @summary Update a contract
     * @request PUT:/3/contracts/{DocumentNumber}
     * @response `200` `ContractWrap` the updated contract
     */
    updateContractsResource: (documentNumber: string, contract: ContractWrap, params: RequestParams = {}) =>
      this.request<ContractWrap, any>({
        path: `/3/contracts/${documentNumber}`,
        method: "PUT",
        body: contract,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ContractsResource
     * @name ListContractsResource
     * @summary Retrieve a list of contracts
     * @request GET:/3/contracts/
     * @response `200` `ContractListItemList` list of contracts
     */
    listContractsResource: (
      query?: {
        /** possibility to filter contracts */
        filter?: "active" | "inactive" | "finished"
      },
      params: RequestParams = {}
    ) =>
      this.request<ContractListItemList, any>({
        path: `/3/contracts/`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ContractsResource
     * @name CreateContractsResource
     * @summary Create a contract
     * @request POST:/3/contracts/
     * @response `200` `ContractWrap` the created contract
     */
    createContractsResource: (contract: ContractWrap, params: RequestParams = {}) =>
      this.request<ContractWrap, any>({
        path: `/3/contracts/`,
        method: "POST",
        body: contract,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ContractsResource
     * @name Finish
     * @summary Set a contract as finished
     * @request PUT:/3/contracts/{DocumentNumber}/finish
     * @response `200` `ContractWrap` the updated contract
     */
    finish: (documentNumber: string, params: RequestParams = {}) =>
      this.request<ContractWrap, any>({
        path: `/3/contracts/${documentNumber}/finish`,
        method: "PUT",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ContractsResource
     * @name Createinvoice
     * @summary Create invoice from contract
     * @request PUT:/3/contracts/{DocumentNumber}/createinvoice
     * @response `200` `InvoiceWrap` created invoice
     */
    createinvoice: (documentNumber: string, params: RequestParams = {}) =>
      this.request<InvoiceWrap, any>({
        path: `/3/contracts/${documentNumber}/createinvoice`,
        method: "PUT",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ContractsResource
     * @name Increaseinvoicecount
     * @summary Increases the invoice count without creating an invoice
     * @request PUT:/3/contracts/{DocumentNumber}/increaseinvoicecount
     * @response `200` `ContractWrap` the updated contract
     */
    increaseinvoicecount: (documentNumber: string, params: RequestParams = {}) =>
      this.request<ContractWrap, any>({
        path: `/3/contracts/${documentNumber}/increaseinvoicecount`,
        method: "PUT",
        format: "json",
        ...params,
      }),
  }
  contracttemplates = {
    /**
     * @description The contract template resource can return a list of records or a single record. By specifying a TemplateNumber in the URL, a single record will be returned. Not specifying a TemplateNumber will return a list of records.
     *
     * @tags ContractTemplatesResource
     * @name ListContractTemplatesResource
     * @summary Retrieve a list of contract templates
     * @request GET:/3/contracttemplates/
     * @response `200` `ContractTemplateListItemList` list of contract templates
     */
    listContractTemplatesResource: (params: RequestParams = {}) =>
      this.request<ContractTemplateListItemList, any>({
        path: `/3/contracttemplates/`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ContractTemplatesResource
     * @name CreateContractTemplatesResource
     * @summary Create a contract template
     * @request POST:/3/contracttemplates/
     * @response `200` `ContractTemplateWrap` the created contract template
     */
    createContractTemplatesResource: (contractTemplate: ContractTemplateWrap, params: RequestParams = {}) =>
      this.request<ContractTemplateWrap, any>({
        path: `/3/contracttemplates/`,
        method: "POST",
        body: contractTemplate,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ContractTemplatesResource
     * @name GetContractTemplatesResource
     * @summary Retrieve a single contract template
     * @request GET:/3/contracttemplates/{TemplateNumber}
     * @response `200` `ContractTemplateWrap` the existing contract template
     */
    getContractTemplatesResource: (templateNumber: number, params: RequestParams = {}) =>
      this.request<ContractTemplateWrap, any>({
        path: `/3/contracttemplates/${templateNumber}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ContractTemplatesResource
     * @name UpdateContractTemplatesResource
     * @summary Update a contract template
     * @request PUT:/3/contracttemplates/{TemplateNumber}
     * @response `200` `ContractTemplateWrap` the updated contract template
     */
    updateContractTemplatesResource: (
      templateNumber: number,
      contractTemplate: ContractTemplateWrap,
      params: RequestParams = {}
    ) =>
      this.request<ContractTemplateWrap, any>({
        path: `/3/contracttemplates/${templateNumber}`,
        method: "PUT",
        body: contractTemplate,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  }
  costcenters = {
    /**
     * @description The cost centers register can return a list of records or a single record. By specifying a Code in the URL, a single record will be returned. Not specifying a Code will return a list of records.
     *
     * @tags CostCentersResource
     * @name ListCostCentersResource
     * @summary Retrieve a list of cost centers
     * @request GET:/3/costcenters
     * @response `200` `CostCenterList` a list of cost centers
     */
    listCostCentersResource: (params: RequestParams = {}) =>
      this.request<CostCenterList, any>({
        path: `/3/costcenters`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CostCentersResource
     * @name CreateCostCentersResource
     * @summary Create a cost center
     * @request POST:/3/costcenters
     * @response `200` `CostCenterWrap` the created cost center
     */
    createCostCentersResource: (costCenter: CostCenterWrap, params: RequestParams = {}) =>
      this.request<CostCenterWrap, any>({
        path: `/3/costcenters`,
        method: "POST",
        body: costCenter,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CostCentersResource
     * @name GetCostCentersResource
     * @summary Retrieve a single cost center
     * @request GET:/3/costcenters/{Code}
     * @response `200` `CostCenterWrap` the existing cost center
     */
    getCostCentersResource: (code: string, params: RequestParams = {}) =>
      this.request<CostCenterWrap, any>({
        path: `/3/costcenters/${code}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CostCentersResource
     * @name UpdateCostCentersResource
     * @summary Update a cost center
     * @request PUT:/3/costcenters/{Code}
     * @response `200` `CostCenterWrap` the updated cost center
     */
    updateCostCentersResource: (code: string, costCenter: CostCenterWrap, params: RequestParams = {}) =>
      this.request<CostCenterWrap, any>({
        path: `/3/costcenters/${code}`,
        method: "PUT",
        body: costCenter,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CostCentersResource
     * @name RemoveCostCentersResource
     * @summary Remove a cost center
     * @request DELETE:/3/costcenters/{Code}
     * @response `default` `void` empty
     */
    removeCostCentersResource: (code: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/3/costcenters/${code}`,
        method: "DELETE",
        ...params,
      }),
  }
  currencies = {
    /**
     * @description The currency register can return a list of records or a single record. By specifying a Code in the URL, a single record will be returned. Not specifying a Code will return a list of records.
     *
     * @tags CurrenciesResource
     * @name ListCurrenciesResource
     * @summary Retrieve a list of currencies
     * @request GET:/3/currencies
     * @response `200` `CurrencyList` a list of currencies
     */
    listCurrenciesResource: (params: RequestParams = {}) =>
      this.request<CurrencyList, any>({
        path: `/3/currencies`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CurrenciesResource
     * @name CreateCurrenciesResource
     * @summary Create a currency
     * @request POST:/3/currencies
     * @response `200` `CurrencyWrap` the created currency
     */
    createCurrenciesResource: (currency: CurrencyWrap, params: RequestParams = {}) =>
      this.request<CurrencyWrap, any>({
        path: `/3/currencies`,
        method: "POST",
        body: currency,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CurrenciesResource
     * @name GetCurrenciesResource
     * @summary Retrieve a single currency
     * @request GET:/3/currencies/{Code}
     * @response `200` `CurrencyWrap` the existing currency
     */
    getCurrenciesResource: (code: string, params: RequestParams = {}) =>
      this.request<CurrencyWrap, any>({
        path: `/3/currencies/${code}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CurrenciesResource
     * @name UpdateCurrenciesResource
     * @summary Update a currency
     * @request PUT:/3/currencies/{Code}
     * @response `200` `CurrencyWrap` the updated currency
     */
    updateCurrenciesResource: (code: string, currency: CurrencyWrap, params: RequestParams = {}) =>
      this.request<CurrencyWrap, any>({
        path: `/3/currencies/${code}`,
        method: "PUT",
        body: currency,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CurrenciesResource
     * @name RemoveCurrenciesResource
     * @summary Remove a currency
     * @request DELETE:/3/currencies/{Code}
     * @response `default` `void` the deleted currency
     */
    removeCurrenciesResource: (code: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/3/currencies/${code}`,
        method: "DELETE",
        ...params,
      }),
  }
  customerreferences = {
    /**
     * @description </p>
     *
     * @tags CustomerReferencesResource
     * @name ListCustomerReferencesResource
     * @summary Retrieve a list of customers reference rows
     * @request GET:/3/customerreferences/
     * @response `200` `CustomerReferenceWrap` list of customers reference rows
     */
    listCustomerReferencesResource: (
      query?: {
        /** possibility to filter by customer number */
        customer?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<CustomerReferenceWrap, any>({
        path: `/3/customerreferences/`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description </p> <p>The created customer reference row will be returned if everything succeeded, if there was any problems an error will be returned.</p>
     *
     * @tags CustomerReferencesResource
     * @name CreateCustomerReferencesResource
     * @summary Create a customer reference row
     * @request POST:/3/customerreferences/
     * @response `200` `CustomerReferenceWrap` the created customer reference row
     */
    createCustomerReferencesResource: (
      customerReferenceRow: CustomerReferenceCustomerReferenceRowWrap,
      params: RequestParams = {}
    ) =>
      this.request<CustomerReferenceWrap, any>({
        path: `/3/customerreferences/`,
        method: "POST",
        body: customerReferenceRow,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description </p> <p>You need to supply the unique customer reference row id that was returned when the customer reference row was created or retrieved from the list of customer reference rows.</p>
     *
     * @tags CustomerReferencesResource
     * @name GetCustomerReferencesResource
     * @summary Retrieve a customer reference row
     * @request GET:/3/customerreferences/{CustomerReferenceRowId}
     * @response `200` `CustomerReferenceWrap` the existing customer reference row
     */
    getCustomerReferencesResource: (customerReferenceRowId: string, params: RequestParams = {}) =>
      this.request<CustomerReferenceWrap, any>({
        path: `/3/customerreferences/${customerReferenceRowId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description </p> <p>The updated customer reference row will be returned if everything succeeded, if there was any problems an error will be returned.</p> <p>You need to supply the unique customer reference row id of the customer reference row that you want to update.</p> <p>Only the properties provided in the request body will be updated, properties not provided will be left unchanged.</p> <p>CustomerNumber cannot be changed by this request.</p>
     *
     * @tags CustomerReferencesResource
     * @name UpdateCustomerReferencesResource
     * @summary Update a customer reference row
     * @request PUT:/3/customerreferences/{CustomerReferenceRowId}
     * @response `200` `CustomerWrap` the updated customer reference row
     */
    updateCustomerReferencesResource: (
      customerReferenceRowId: string,
      customerReferenceRow: CustomerReferenceCustomerReferenceRowWrap,
      params: RequestParams = {}
    ) =>
      this.request<CustomerWrap, any>({
        path: `/3/customerreferences/${customerReferenceRowId}`,
        method: "PUT",
        body: customerReferenceRow,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description </p> <p>Deletes the customer reference row permanently. If everything succeeded the response will be of the type 204, No content and the response body will be empty.</p> <p>If there was any problems an error will be returned.</p> <p>You need to supply the unique customer reference row id of the customer reference row that you want to delete.</p>
     *
     * @tags CustomerReferencesResource
     * @name RemoveCustomerReferencesResource
     * @summary Delete a customer reference row
     * @request DELETE:/3/customerreferences/{CustomerReferenceRowId}
     * @response `default` `void` empty
     */
    removeCustomerReferencesResource: (customerReferenceRowId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/3/customerreferences/${customerReferenceRowId}`,
        method: "DELETE",
        ...params,
      }),
  }
  customers = {
    /**
     * @description The customers are returned sorted by customer number with the lowest number appearing first.
     *
     * @tags CustomersResource
     * @name ListCustomersResource
     * @summary Retrieve a list of customers
     * @request GET:/3/customers/
     * @response `200` `CustomerListItemList` list of customers
     */
    listCustomersResource: (
      query?: {
        /** possibility to filter customers */
        filter?: "active" | "inactive"
        /** filter by customer number */
        customernumber?: string
        /** filter by name */
        name?: string
        /** filter by zip code */
        zipcode?: string
        /** filter by city */
        city?: string
        /** filter by email */
        email?: string
        /** filter by phone */
        phone?: string
        /** filter by organisation number */
        organisationnumber?: string
        /** filter by gln */
        gln?: string
        /** filter by gln delivery */
        glndelivery?: string
        /** filter by last modified */
        lastmodified?: string
        /** field to sort returned list */
        sortby?: "customernumber" | "name"
        /** filter by page */
        page?: number
      },
      params: RequestParams = {}
    ) =>
      this.request<CustomerListItemList, any>({
        path: `/3/customers/`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description The created customer will be returned if everything succeeded, if there was any problems an error will be returned.
     *
     * @tags CustomersResource
     * @name CreateCustomersResource
     * @summary Create a customer
     * @request POST:/3/customers/
     * @response `200` `CustomerWrap` the created customer
     */
    createCustomersResource: (customer: CustomerWrap, params: RequestParams = {}) =>
      this.request<CustomerWrap, any>({
        path: `/3/customers/`,
        method: "POST",
        body: customer,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description You need to supply the unique customer number that was returned when the customer was created or retrieved from the list of customers.
     *
     * @tags CustomersResource
     * @name GetCustomersResource
     * @summary Retrieve a customer
     * @request GET:/3/customers/{CustomerNumber}
     * @response `200` `CustomerWrap` the existing customer
     */
    getCustomersResource: (customerNumber: string, params: RequestParams = {}) =>
      this.request<CustomerWrap, any>({
        path: `/3/customers/${customerNumber}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description <p>The updated customer will be returned if everything succeeded, if there was any problems an error will be returned.</p> <p>You need to supply the unique customer number of the customer that you want to update.</p> <p>Only the properties provided in the request body will be updated, properties not provided will left unchanged.</p>
     *
     * @tags CustomersResource
     * @name UpdateCustomersResource
     * @summary Update a customer
     * @request PUT:/3/customers/{CustomerNumber}
     * @response `200` `CustomerWrap` the updated customer
     */
    updateCustomersResource: (customerNumber: string, customer: CustomerWrap, params: RequestParams = {}) =>
      this.request<CustomerWrap, any>({
        path: `/3/customers/${customerNumber}`,
        method: "PUT",
        body: customer,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes the customer permanently. If everything succeeded the response will be of the type 204 \u2013 No content and the response body will be empty. If there was any problems an error will be returned. You need to supply the unique customer number of the customer that you want to delete.
     *
     * @tags CustomersResource
     * @name RemoveCustomersResource
     * @summary Delete a customer
     * @request DELETE:/3/customers/{CustomerNumber}
     * @response `default` `void` empty
     */
    removeCustomersResource: (customerNumber: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/3/customers/${customerNumber}`,
        method: "DELETE",
        ...params,
      }),
  }
  employees = {
    /**
     * @description ScheduleId, MonthlySalary and HourlyPay reflect current values, all ScheduleIds are returned in DatedSchedules and all MonthlySalary and HourlyPay pairs are returned in DatedWages.
     *
     * @tags EmployeesResource
     * @name ListEmployeesResource
     * @summary Retrieve a list of employees
     * @request GET:/3/employees/
     * @response `200` `EmployeeListItemWrap` list of employees
     */
    listEmployeesResource: (params: RequestParams = {}) =>
      this.request<EmployeeListItemWrap, any>({
        path: `/3/employees/`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description EmployeeId is optional. If not supplied the program will generate a unique id. Only one of DatedSchedules and ScheduleId may be supplied. If DatedSchedules are supplied it must have one and only one record where FirstDay = '1970-01-01'. All FirstDay values must greater or equal to '1970-01-01' and unique. If DatedWages is supplied neither MonthlySalary nor HourlyPay may be supplied. If MonthlySalary or HourlyPay are supplied, DatedWages may not be supplied. If DatedWages are supplied it must have one and only one record where FirstDay = '1970-01-01'. All FirstDay values must greater or equal to '1970-01-01' and unique.
     *
     * @tags EmployeesResource
     * @name CreateEmployeesResource
     * @summary Create a new employee
     * @request POST:/3/employees/
     * @response `200` `EmployeeWrap` the created employee
     */
    createEmployeesResource: (employee: EmployeeWrap, params: RequestParams = {}) =>
      this.request<EmployeeWrap, any>({
        path: `/3/employees/`,
        method: "POST",
        body: employee,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description ScheduleId, MonthlySalary and HourlyPay reflect current values, all ScheduleIds are returned in DatedSchedules and all MonthlySalary and HourlyPay pairs are returned in DatedWages.
     *
     * @tags EmployeesResource
     * @name GetEmployeesResource
     * @summary Retrieve a specific employee
     * @request GET:/3/employees/{EmployeeId}
     * @response `200` `EmployeeWrap` the existing employee
     */
    getEmployeesResource: (employeeId: string, params: RequestParams = {}) =>
      this.request<EmployeeWrap, any>({
        path: `/3/employees/${employeeId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Only one of DatedSchedules and ScheduleId may be supplied. If DatedSchedules are supplied it must have one and only one record where FirstDay = '1970-01-01'. All FirstDay values must greater or equal to '1970-01-01' and unique. If DatedWages is supplied neither MonthlySalary nor HourlyPay may be supplied. If MonthlySalary or HourlyPay are supplied, DatedWages may not be supplied. If DatedWages are supplied it must have one and only one record where FirstDay = '1970-01-01'. All FirstDay values must greater or equal to '1970-01-01' and unique.
     *
     * @tags EmployeesResource
     * @name UpdateEmployeesResource
     * @summary Update employee
     * @request PUT:/3/employees/{EmployeeId}
     * @response `200` `EmployeeWrap` the updated employee
     */
    updateEmployeesResource: (employeeId: string, employee: EmployeeWrap, params: RequestParams = {}) =>
      this.request<EmployeeWrap, any>({
        path: `/3/employees/${employeeId}`,
        method: "PUT",
        body: employee,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  }
  euvatlimitregulation = {
    /**
     * No description
     *
     * @tags EUVatLimitRegulationResource
     * @name GetEuVatLimitRegulationResource
     * @summary Retrieve details about eu vat limit
     * @request GET:/3/euvatlimitregulation/
     * @response `200` `EUVatLimitRegulationWrap` eu vat limit regulation entry
     */
    getEuVatLimitRegulationResource: (
      query?: {
        /**
         * eu vat limit regulation for year, if not provided than this will be set to current year
         * @format int32
         */
        year?: number
      },
      params: RequestParams = {}
    ) =>
      this.request<EUVatLimitRegulationWrap, any>({
        path: `/3/euvatlimitregulation/`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  }
  expenses = {
    /**
     * @description Retrieve expense codes.
     *
     * @tags ExpensesResource
     * @name ListExpensesResource
     * @summary Retrieve expenses
     * @request GET:/3/expenses/
     * @response `200` `ExpenseListItemWrap` expense
     */
    listExpensesResource: (params: RequestParams = {}) =>
      this.request<ExpenseListItemWrap, any>({
        path: `/3/expenses/`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ExpensesResource
     * @name CreateExpensesResource
     * @summary Create an expense
     * @request POST:/3/expenses/
     * @response `200` `ExpenseWrap` expense
     */
    createExpensesResource: (expense: ExpenseWrap, params: RequestParams = {}) =>
      this.request<ExpenseWrap, any>({
        path: `/3/expenses/`,
        method: "POST",
        body: expense,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves expense information for specified expense.
     *
     * @tags ExpensesResource
     * @name GetExpensesResource
     * @summary Retrieve an expense
     * @request GET:/3/expenses/{ExpenseCode}
     * @response `200` `ExpenseWrap` list of expenses
     */
    getExpensesResource: (expenseCode: string, params: RequestParams = {}) =>
      this.request<ExpenseWrap, any>({
        path: `/3/expenses/${expenseCode}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  }
  noxfinansinvoices = {
    /**
     * @description <p> When sending an invoice with Fortnox Finans you will get the invoice status returned if everything succeeded, if there were any problems, an error will be returned. <p> Please note that it can take 1 min to several hours before you will get back status, OCR number and link to PDF document, meanwhile the invoice will have status UNKNOWN or NOT_AUTHORIZED. <p> Fortnox Finans is currently only accepting invoices in SEK <p> <i>Parameters in the body:</i> <ul> <li><b>InvoiceNumber</b>: the invoice number for the invoice which should be sent with Fortnox Finans</li> <li><b>SendMethod</b>: how to send the invoice; EMAIL, LETTER, EINVOICE or NONE</li> <li><b>Service</b>: which service to use; LEDGERBASE or REMINDER</li> </ul> <p>
     *
     * @tags FinanceInvoicesResource
     * @name CreateFinanceInvoicesResource
     * @summary Send an invoice with Fortnox Finans
     * @request POST:/3/noxfinansinvoices/
     * @response `200` `InvoiceResponseWrap` The current status of the invoice <i>Response parameters:</i> <p> <ul> <li>@url: the URL used to retrieve the invoice status</li> <li>BalanceIncludeFees: the current balance of the invoice, fees included (in SEK)</li> <li>BalanceIncludeFeesCurrency: the current balance of the invoice, fees included, in other currency (currently only SEK is available)</li> <li>CurrentCapitalBalance: capital amount balance (in SEK)</li> <li>CurrentCapitalBalanceCurrency: capital amount balance in other currency (currently only SEK is available)</li> <li>InvoiceDocumentURL: URL to PDF document for invoice</li> <li>InvoiceNumber: invoice number in Fortnox</li> <li>NextEvent: the next event for the invoice</li> <li>NextEventDate: the date when the next event for the invoice will occur</li> <li>OCRNumber: the OCR number of the invoice</li> <li>Service: the service used for the invoice (LEDGERBASE or REMINDER)</li> <li>ServiceName: the detailed service name used for the invoice (SERVICE_FULL, SERVICE_LIGHT or REMINDER_SERVICE, this field is omitted if the invoice is sent with the old Noxbox service)</li> <li>Status: the current status of the invoice</li> </ul> <i>status</i> can be one of the following: <ul> <li>UNKNOWN: Not yet confirmed by Fortnox Finans</li> <li>NOT_AUTHORIZED: Factoring invoice waiting approval</li> <li>OPEN: invoice is open, and not fully paid yet</li> <li>PAUSED: invoice is paused</li> <li>CLOSED: invoice is closed (fully paid, credited or cancelled)</li> </ul>
     */
    createFinanceInvoicesResource: (payload: CreatePayloadWrap, params: RequestParams = {}) =>
      this.request<InvoiceResponseWrap, any>({
        path: `/3/noxfinansinvoices/`,
        method: "POST",
        body: payload,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description <p> Retrieves the status and balance of an invoice sent to Fortnox Finans. You need to supply the invoice number in Fortox to retrieve the invoice. <p> <b>Note that</b> invoices sent with the old &quot;Noxbox&quot; platform will not have the &quot;ServiceName&quot; property in the response. This new property is added to the response if the invoice is sent with the new finance service. <p> Response explanation for <b>Service</b> and <b>ServiceName</b> <p> <b>Service:</b> <ul> <li><b>LEDGERBASE</b>: if the invoice is sent by using the old &quot;Noxbox&quot; platform, or the new finance service with the subtypes &quot;Service Full&quot; or &quot;Service Light&quot;. These services are explained above in the &quot;Fortnox Finans services&quot; section</li> <li><b>REMINDER</b>: If the invoice is sent by the new finance service, with the service Reminder Service</li> </ul> <p> <b>ServiceName</b> (only provided for <u>new finance service</u> invoices): <ul> <li><b>SERVICE_FULL</b>: Ledgerbase service <u>with</u> automatic reminders is used</li> <li><b>SERVICE_LIGHT</b>: Ledgerbase service <u>without</u> automatic reminders is used.</li> <li><b>REMINDER_SERVICE</b>: Reminder service is used</li> </ul>
     *
     * @tags FinanceInvoicesResource
     * @name GetFinanceInvoicesResource
     * @summary Retrieve a single invoice payment
     * @request GET:/3/noxfinansinvoices/{Number}
     * @response `200` `InvoiceResponseWrap` The current status of the invoice <i>Response parameters:</i> <p> <ul> <li>@url: the URL used to retrieve the invoice status</li> <li>BalanceIncludeFees: the current balance of the invoice, fees included (in SEK)</li> <li>BalanceIncludeFeesCurrency: the current balance of the invoice, fees included, in other currency (currently only SEK is available)</li> <li>CurrentCapitalBalance: capital amount balance (in SEK)</li> <li>CurrentCapitalBalanceCurrency: capital amount balance in other currency (currently only SEK is available)</li> <li>InvoiceDocumentURL: URL to PDF document for invoice</li> <li>InvoiceNumber: invoice number in Fortnox</li> <li>NextEvent: the next event for the invoice</li> <li>NextEventDate: the date when the next event for the invoice will occur</li> <li>OCRNumber: the OCR number of the invoice</li> <li>Service: the service used for the invoice (LEDGERBASE or REMINDER)</li> <li>ServiceName: the detailed service name used for the invoice (SERVICE_FULL, SERVICE_LIGHT or REMINDER_SERVICE, this field is omitted if the invoice is sent with the old Noxbox service)</li> <li>Status: the current status of the invoice</li> </ul> <i>status</i> can be one of the following: <ul> <li>UNKNOWN: Not yet confirmed by Fortnox Finans</li> <li>NOT_AUTHORIZED: Factoring invoice waiting approval</li> <li>OPEN: invoice is open, and not fully paid yet</li> <li>PAUSED: invoice is paused</li> <li>CLOSED: invoice is closed (fully paid, credited or cancelled)</li> </ul>
     */
    getFinanceInvoicesResource: (number: string, params: RequestParams = {}) =>
      this.request<InvoiceResponseWrap, any>({
        path: `/3/noxfinansinvoices/${number}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description <p> Removes the invoice from Fortnox Finans process. The invoice can still be handled manually, but no further automatic process will be applied <p>
     *
     * @tags FinanceInvoicesResource
     * @name Stop
     * @summary Action Stop
     * @request PUT:/3/noxfinansinvoices/{Number}/stop
     * @response `200` `InvoiceResponseWrap` The current status of the invoice
     */
    stop: (number: string, params: RequestParams = {}) =>
      this.request<InvoiceResponseWrap, any>({
        path: `/3/noxfinansinvoices/${number}/stop`,
        method: "PUT",
        format: "json",
        ...params,
      }),

    /**
     * @description <p> Pauses an invoice for up to 60 days. Pause means that Fortnox Finans reminder process will stop for the invoice. All invoices which have the status OPEN can be paused. <p> <i>Parameters in the body:</i> <ul> <li><b>PausedUntilDate</b>: the invoice will be paused to and including this date.</li> </ul> <p>
     *
     * @tags FinanceInvoicesResource
     * @name Pause
     * @summary Action Pause
     * @request PUT:/3/noxfinansinvoices/{Number}/pause
     * @response `200` `InvoiceResponseWrap` The current status of the invoice <i>Response parameters:</i> <p> <ul> <li>@url: the URL used to retrieve the invoice status</li> <li>BalanceIncludeFees: the current balance of the invoice, fees included (in SEK)</li> <li>BalanceIncludeFeesCurrency: the current balance of the invoice, fees included, in other currency (currently only SEK is available)</li> <li>CurrentCapitalBalance: capital amount balance (in SEK)</li> <li>CurrentCapitalBalanceCurrency: capital amount balance in other currency (currently only SEK is available)</li> <li>InvoiceDocumentURL: URL to PDF document for invoice</li> <li>InvoiceNumber: invoice number in Fortnox</li> <li>NextEvent: the next event for the invoice</li> <li>NextEventDate: the date when the next event for the invoice will occur</li> <li>OCRNumber: the OCR number of the invoice</li> <li>Service: the service used for the invoice (LEDGERBASE or REMINDER)</li> <li>ServiceName: the detailed service name used for the invoice (SERVICE_FULL, SERVICE_LIGHT or REMINDER_SERVICE, this field is omitted if the invoice is sent with the old Noxbox service)</li> <li>Status: the current status of the invoice</li> </ul> <i>status</i> can be one of the following: <ul> <li>UNKNOWN: Not yet confirmed by Fortnox Finans</li> <li>NOT_AUTHORIZED: Factoring invoice waiting approval</li> <li>OPEN: invoice is open, and not fully paid yet</li> <li>PAUSED: invoice is paused</li> <li>CLOSED: invoice is closed (fully paid, credited or cancelled)</li> </ul>
     */
    pause: (number: string, payload: PausePayloadWrap, params: RequestParams = {}) =>
      this.request<InvoiceResponseWrap, any>({
        path: `/3/noxfinansinvoices/${number}/pause`,
        method: "PUT",
        body: payload,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description <p> Unpauses a paused invoice. If the invoice is manually paused, then this action will remove the pause status immediately. Invoices which are paused by the system cannot be unpaused. <p> <b>Note:</b> this action is <b>not</b> available for invoices sent by the old Noxbox platform
     *
     * @tags FinanceInvoicesResource
     * @name Unpause
     * @summary Action Unpause
     * @request PUT:/3/noxfinansinvoices/{Number}/unpause
     * @response `200` `InvoiceResponseWrap` The current status of the invoice <i>Response parameters:</i> <p> <ul> <li>@url: the URL used to retrieve the invoice status</li> <li>BalanceIncludeFees: the current balance of the invoice, fees included (in SEK)</li> <li>BalanceIncludeFeesCurrency: the current balance of the invoice, fees included, in other currency (currently only SEK is available)</li> <li>CurrentCapitalBalance: capital amount balance (in SEK)</li> <li>CurrentCapitalBalanceCurrency: capital amount balance in other currency (currently only SEK is available)</li> <li>InvoiceDocumentURL: URL to PDF document for invoice</li> <li>InvoiceNumber: invoice number in Fortnox</li> <li>NextEvent: the next event for the invoice</li> <li>NextEventDate: the date when the next event for the invoice will occur</li> <li>OCRNumber: the OCR number of the invoice</li> <li>Service: the service used for the invoice (LEDGERBASE or REMINDER)</li> <li>ServiceName: the detailed service name used for the invoice (SERVICE_FULL, SERVICE_LIGHT or REMINDER_SERVICE, this field is omitted if the invoice is sent with the old Noxbox service)</li> <li>Status: the current status of the invoice</li> </ul> <i>status</i> can be one of the following: <ul> <li>UNKNOWN: Not yet confirmed by Fortnox Finans</li> <li>NOT_AUTHORIZED: Factoring invoice waiting approval</li> <li>OPEN: invoice is open, and not fully paid yet</li> <li>PAUSED: invoice is paused</li> <li>CLOSED: invoice is closed (fully paid, credited or cancelled)</li> </ul>
     */
    unpause: (number: string, params: RequestParams = {}) =>
      this.request<InvoiceResponseWrap, any>({
        path: `/3/noxfinansinvoices/${number}/unpause`,
        method: "PUT",
        format: "json",
        ...params,
      }),

    /**
     * @description <p> If fees have been added to an invoice, e.g. reminder fees, the client can choose to pay those fees instead of letting the customer pay. <p> <b>Note:</b> this action is <b>not</b> available for invoices sent by the old Noxbox platform
     *
     * @tags FinanceInvoicesResource
     * @name TakeFees
     * @summary Action Take Fees
     * @request PUT:/3/noxfinansinvoices/{Number}/take-fees
     * @response `200` `InvoiceResponseWrap` The current status of the invoice <i>Response parameters:</i> <p> <ul> <li>@url: the URL used to retrieve the invoice status</li> <li>BalanceIncludeFees: the current balance of the invoice, fees included (in SEK)</li> <li>BalanceIncludeFeesCurrency: the current balance of the invoice, fees included, in other currency (currently only SEK is available)</li> <li>CurrentCapitalBalance: capital amount balance (in SEK)</li> <li>CurrentCapitalBalanceCurrency: capital amount balance in other currency (currently only SEK is available)</li> <li>InvoiceDocumentURL: URL to PDF document for invoice</li> <li>InvoiceNumber: invoice number in Fortnox</li> <li>NextEvent: the next event for the invoice</li> <li>NextEventDate: the date when the next event for the invoice will occur</li> <li>OCRNumber: the OCR number of the invoice</li> <li>Service: the service used for the invoice (LEDGERBASE or REMINDER)</li> <li>ServiceName: the detailed service name used for the invoice (SERVICE_FULL, SERVICE_LIGHT or REMINDER_SERVICE, this field is omitted if the invoice is sent with the old Noxbox service)</li> <li>Status: the current status of the invoice</li> </ul> <i>status</i> can be one of the following: <ul> <li>UNKNOWN: Not yet confirmed by Fortnox Finans</li> <li>NOT_AUTHORIZED: Factoring invoice waiting approval</li> <li>OPEN: invoice is open, and not fully paid yet</li> <li>PAUSED: invoice is paused</li> <li>CLOSED: invoice is closed (fully paid, credited or cancelled)</li> </ul>
     */
    takeFees: (number: string, params: RequestParams = {}) =>
      this.request<InvoiceResponseWrap, any>({
        path: `/3/noxfinansinvoices/${number}/take-fees`,
        method: "PUT",
        format: "json",
        ...params,
      }),

    /**
     * @description <p> If a customer has paid some or all of the capital on an invoice directly to the client, this can be reported for bookkeeping purposes and reported to Fortnox Finans to actually deduct the paid amount from the invoice. <p> <b>Note:</b> this action is <b>not</b> available for invoices sent by the old Noxbox platform <p> <i>Parameters in the body:</i> <ul> <li><b>ClientTakesFees</b>: a boolean indicating if the client should take the customer fees or not.</li> <li><b>BookkeepPaymentInFortnox</b>: a boolean indicating if the payment should be bookkept in Fortnox or not. Usually the payment should be bookkept.</li> <li><b>ReportToFinance</b>: a boolean indicating if the payment should be reported to Fortnox Finans or not. Usually the payment should be reported.</li> <li><b>PaymentAmount</b>: a decimal field with the amount to report.</li> <li><b>PaymentMethodCode</b>: a string with the method code (e.g. BG, PG or other). Could be omitted if BookkeepPaymentInFortnox is false.</li> <li><b>PaymentMethodAccount</b>: an integer with the account number to bookkeep the payment on (e.g. 1920 or other). Could be omitted if BookkeepPaymentInFortnox is false.</li> </ul> <p>
     *
     * @tags FinanceInvoicesResource
     * @name ReportPayment
     * @summary Action Report Payment
     * @request PUT:/3/noxfinansinvoices/{Number}/report-payment
     * @response `200` `InvoiceResponseWrap` The current status of the invoice <i>Response parameters:</i> <p> <ul> <li>@url: the URL used to retrieve the invoice status</li> <li>BalanceIncludeFees: the current balance of the invoice, fees included (in SEK)</li> <li>BalanceIncludeFeesCurrency: the current balance of the invoice, fees included, in other currency (currently only SEK is available)</li> <li>CurrentCapitalBalance: capital amount balance (in SEK)</li> <li>CurrentCapitalBalanceCurrency: capital amount balance in other currency (currently only SEK is available)</li> <li>InvoiceDocumentURL: URL to PDF document for invoice</li> <li>InvoiceNumber: invoice number in Fortnox</li> <li>NextEvent: the next event for the invoice</li> <li>NextEventDate: the date when the next event for the invoice will occur</li> <li>OCRNumber: the OCR number of the invoice</li> <li>Service: the service used for the invoice (LEDGERBASE or REMINDER)</li> <li>ServiceName: the detailed service name used for the invoice (SERVICE_FULL, SERVICE_LIGHT or REMINDER_SERVICE, this field is omitted if the invoice is sent with the old Noxbox service)</li> <li>Status: the current status of the invoice</li> </ul> <i>status</i> can be one of the following: <ul> <li>UNKNOWN: Not yet confirmed by Fortnox Finans</li> <li>NOT_AUTHORIZED: Factoring invoice waiting approval</li> <li>OPEN: invoice is open, and not fully paid yet</li> <li>PAUSED: invoice is paused</li> <li>CLOSED: invoice is closed (fully paid, credited or cancelled)</li> </ul>
     */
    reportPayment: (number: string, payload: ReportPaymentPayload, params: RequestParams = {}) =>
      this.request<InvoiceResponseWrap, any>({
        path: `/3/noxfinansinvoices/${number}/report-payment`,
        method: "PUT",
        body: payload,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  }
  financialyears = {
    /**
     * @description Add the query param to filter on specific date.
     *
     * @tags FinancialYearsResource
     * @name GetByDate
     * @summary Retrieve a list of financial years
     * @request GET:/3/financialyears
     * @response `200` `FinancialYearWrapList` the existing financial year
     */
    getByDate: (
      query?: {
        /**
         * date to filter on, for example 2020-06-30
         * @format date
         */
        Date?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<FinancialYearWrapList, any>({
        path: `/3/financialyears`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags FinancialYearsResource
     * @name CreateFinancialYearsResource
     * @summary Create a financial year
     * @request POST:/3/financialyears
     * @response `200` `FinancialYearWrap` the created year
     */
    createFinancialYearsResource: (financialYear: FinancialYearWrap, params: RequestParams = {}) =>
      this.request<FinancialYearWrap, any>({
        path: `/3/financialyears`,
        method: "POST",
        body: financialYear,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags FinancialYearsResource
     * @name GetById
     * @summary Retrieve financial year by id
     * @request GET:/3/financialyears/{Id}
     * @response `200` `FinancialYearWrap` the existing financial year
     */
    getById: (id: number, params: RequestParams = {}) =>
      this.request<FinancialYearWrap, any>({
        path: `/3/financialyears/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  }
  inbox = {
    /**
     * No description
     *
     * @tags InboxResource
     * @name GetInboxResource
     * @summary Retrieve the root folder containing files and folders
     * @request GET:/3/inbox/
     * @response `200` `FolderWrap` the root folder
     */
    getInboxResource: (params: RequestParams = {}) =>
      this.request<FolderWrap, any>({
        path: `/3/inbox/`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Upload a file to a specific subdirectory.
     *
     * @tags InboxResource
     * @name Upload
     * @summary Upload a file
     * @request POST:/3/inbox/
     * @response `200` `FolderFileRowWrap` file file
     */
    upload: (
      data: {
        /** file */
        file?: object
      },
      query?: {
        /** folder id */
        folderId?: string
        /** path */
        path?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<FolderFileRowWrap, any>({
        path: `/3/inbox/`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InboxResource
     * @name GetFileByIdInboxResource
     * @summary Retrieve a single file
     * @request GET:/3/inbox/{Id}
     * @response `200` `string` a single file
     */
    getFileByIdInboxResource: (id: string, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/3/inbox/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InboxResource
     * @name RemoveInboxResource
     * @summary Remove a file or folder
     * @request DELETE:/3/inbox/{Id}
     * @response `default` `void` empty
     */
    removeInboxResource: (id: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/3/inbox/${id}`,
        method: "DELETE",
        ...params,
      }),
  }
  invoiceaccruals = {
    /**
     * @description The invoice accruals register can return a list of records or a single record. By specifying a InvoiceNumber in the URL, a single record will be returned. Not specifying a InvoiceNumber will return a list of records.
     *
     * @tags InvoiceAccrualsResource
     * @name ListInvoiceAccrualsResource
     * @summary Retrieve a list of invoice accruals
     * @request GET:/3/invoiceaccruals/
     * @response `200` `InvoiceAccrualListItemList` list of invoice accruals
     */
    listInvoiceAccrualsResource: (params: RequestParams = {}) =>
      this.request<InvoiceAccrualListItemList, any>({
        path: `/3/invoiceaccruals/`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InvoiceAccrualsResource
     * @name CreateInvoiceAccrualsResource
     * @summary Create an invoice accrual
     * @request POST:/3/invoiceaccruals/
     * @response `200` `InvoiceAccrualWrap` the created invoice accrual
     */
    createInvoiceAccrualsResource: (invoiceAccrual: InvoiceAccrualWrap, params: RequestParams = {}) =>
      this.request<InvoiceAccrualWrap, any>({
        path: `/3/invoiceaccruals/`,
        method: "POST",
        body: invoiceAccrual,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InvoiceAccrualsResource
     * @name GetInvoiceAccrualsResource
     * @summary Retrieve a single invoice accrual
     * @request GET:/3/invoiceaccruals/{InvoiceNumber}
     * @response `200` `InvoiceAccrualWrap` the existing invoice accrual
     */
    getInvoiceAccrualsResource: (invoiceNumber: number, params: RequestParams = {}) =>
      this.request<InvoiceAccrualWrap, any>({
        path: `/3/invoiceaccruals/${invoiceNumber}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InvoiceAccrualsResource
     * @name UpdateInvoiceAccrualsResource
     * @summary Update an invoice accrual
     * @request PUT:/3/invoiceaccruals/{InvoiceNumber}
     * @response `200` `InvoiceAccrualWrap` the updated invoice accrual
     */
    updateInvoiceAccrualsResource: (
      invoiceNumber: number,
      invoiceAccrual: InvoiceAccrualWrap,
      params: RequestParams = {}
    ) =>
      this.request<InvoiceAccrualWrap, any>({
        path: `/3/invoiceaccruals/${invoiceNumber}`,
        method: "PUT",
        body: invoiceAccrual,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InvoiceAccrualsResource
     * @name RemoveInvoiceAccrualsResource
     * @summary Remove an invoice accrual
     * @request DELETE:/3/invoiceaccruals/{InvoiceNumber}
     * @response `default` `void` empty
     */
    removeInvoiceAccrualsResource: (invoiceNumber: number, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/3/invoiceaccruals/${invoiceNumber}`,
        method: "DELETE",
        ...params,
      }),
  }
  invoicepayments = {
    /**
     * No description
     *
     * @tags InvoicePaymentsResource
     * @name ListInvoicePaymentsResource
     * @summary Retrieve a list of invoice payments
     * @request GET:/3/invoicepayments/
     * @response `200` `InvoicePaymentListItemList` list of invoice payments
     */
    listInvoicePaymentsResource: (
      query?: {
        /**
         * filter by invoice number
         * @format int32
         */
        invoicenumber?: number
        /** filter by last modified */
        lastmodified?: string
        /** field to sort returned list on */
        sortby?: "paymentdate"
      },
      params: RequestParams = {}
    ) =>
      this.request<InvoicePaymentListItemList, any>({
        path: `/3/invoicepayments/`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InvoicePaymentsResource
     * @name CreateInvoicePaymentsResource
     * @summary Create an invoice payment
     * @request POST:/3/invoicepayments/
     * @response `200` `InvoicePaymentWrap` the created invoice payment
     */
    createInvoicePaymentsResource: (invoicePayment: InvoicePaymentWrap, params: RequestParams = {}) =>
      this.request<InvoicePaymentWrap, any>({
        path: `/3/invoicepayments/`,
        method: "POST",
        body: invoicePayment,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InvoicePaymentsResource
     * @name GetInvoicePaymentsResource
     * @summary Retrieve a single invoice payment
     * @request GET:/3/invoicepayments/{Number}
     * @response `200` `InvoicePaymentWrap` the existing invoice payment
     */
    getInvoicePaymentsResource: (number: string, params: RequestParams = {}) =>
      this.request<InvoicePaymentWrap, any>({
        path: `/3/invoicepayments/${number}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InvoicePaymentsResource
     * @name UpdateInvoicePaymentsResource
     * @summary Update an invoice payment
     * @request PUT:/3/invoicepayments/{Number}
     * @response `200` `InvoicePaymentWrap` the updated invoice payment
     */
    updateInvoicePaymentsResource: (
      number: string,
      invoicePayment: InvoicePaymentWrap,
      params: RequestParams = {}
    ) =>
      this.request<InvoicePaymentWrap, any>({
        path: `/3/invoicepayments/${number}`,
        method: "PUT",
        body: invoicePayment,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InvoicePaymentsResource
     * @name RemoveInvoicePaymentsResource
     * @summary Remove an invoice payment
     * @request DELETE:/3/invoicepayments/{Number}
     * @response `default` `void` empty
     */
    removeInvoicePaymentsResource: (number: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/3/invoicepayments/${number}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InvoicePaymentsResource
     * @name Bookkeep
     * @summary Bookkeep an invoice payment
     * @request PUT:/3/invoicepayments/{Number}/bookkeep
     * @response `200` `InvoicePaymentWrap` the updated invoice payment
     */
    bookkeep: (number: string, invoicePayment: InvoicePaymentWrap, params: RequestParams = {}) =>
      this.request<InvoicePaymentWrap, any>({
        path: `/3/invoicepayments/${number}/bookkeep`,
        method: "PUT",
        body: invoicePayment,
        format: "json",
        ...params,
      }),
  }
  invoices = {
    /**
     * No description
     *
     * @tags InvoicesResource
     * @name GetInvoicesResource
     * @summary Retrieve a single invoice
     * @request GET:/3/invoices/{DocumentNumber}
     * @response `200` `InvoiceWrap` the existing invoice
     */
    getInvoicesResource: (documentNumber: string, params: RequestParams = {}) =>
      this.request<InvoiceWrap, any>({
        path: `/3/invoices/${documentNumber}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Note that there are two approaches for updating the rows on an invoice. If RowId is not specified on any row, the rows will be mapped and updated in the order in which they are set in the array. All rows that should remain on the invoice needs to be provided. If RowId is specified on one or more rows the following goes: Corresponding row with that id will be updated. The rows without RowId will be interpreted as new rows. If a row should not be updated but remain on the invoice then specify only RowId like { "RowId": 123 }, otherwise it will be removed. Note that new RowIds are generated for all rows every time an invoice is updated. Note: The <b>EuQuarterlyReport</b> property will become obsolete at 2021-12-01. This property is currently used by the <b>Quarterly</b> report as one of the conditions that determine if an invoice should be included in the report or not. A new version of the <b>Quarterly</b> report is released at 2021-12-01. In the new report, this property will not be used when determining if an invoice should be included in the report or not, with one exception: if the invoice is created before 2021-12-01, and this property is false, the invoice will be excluded from the report. For invoices created 2021-12-01 and later, this property will have no effect.
     *
     * @tags InvoicesResource
     * @name UpdateInvoicesResource
     * @summary Update an invoice
     * @request PUT:/3/invoices/{DocumentNumber}
     * @response `200` `InvoiceWrap` the updated invoice
     */
    updateInvoicesResource: (
      documentNumber: string,
      invoicePayload: InvoicePayloadWrap,
      params: RequestParams = {}
    ) =>
      this.request<InvoiceWrap, any>({
        path: `/3/invoices/${documentNumber}`,
        method: "PUT",
        body: invoicePayload,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InvoicesResource
     * @name ListInvoicesResource
     * @summary Retrieve a list of invoices
     * @request GET:/3/invoices
     * @response `200` `InvoiceListItemWrap` list of invoices
     */
    listInvoicesResource: (
      query?: {
        /** possibility to filter invoices */
        filter?: "cancelled" | "fullypaid" | "unpaid" | "unpaidoverdue" | "unbooked"
        costcenter?: string
        customername?: string
        customernumber?: string
        label?: string
        documentnumber?: string
        fromdate?: string
        todate?: string
        fromfinalpaydate?: string
        tofinalpaydate?: string
        lastmodified?: string
        notcompleted?: string
        ocr?: string
        ourreference?: string
        project?: string
        sent?: string
        externalinvoicereference1?: string
        externalinvoicereference2?: string
        yourreference?: string
        invoicetype?: string
        articlenumber?: string
        articledescription?: string
        currency?: string
        accountnumberfrom?: string
        accountnumberto?: string
        yourordernumber?: string
        credit?: string
        /** field to sort returned list on */
        sortby?: "customername" | "customernumber" | "documentnumber" | "invoicedate" | "ocr" | "total"
      },
      params: RequestParams = {}
    ) =>
      this.request<InvoiceListItemWrap, any>({
        path: `/3/invoices`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description An endpoint for creating an invoice. While it is possible to create an invoice without rows, we encourage you to add them if you can. Omitted values in the payload will be supplied by Predefined values which can be edited in the Fortnox account settings. Note that Predefined values will always be overwritten by values provided through the API. Should you have EasyVat enabled, it is mandatory to provide an account in the request should you use a custom VAT rate. This endpoint can produce errors, some of which may only be relevant for EasyVat. Refer to the table below. <table> <caption>Errors that can be raised by this endpoint.</caption> <tr> <th>Error Code</th> <th>HTTP Code</th> <th>Description</th> <th>Solution</th> </tr> <tr> <td>2004167</td> <td>400</td> <td>An account must be provided when using a custom VAT rate and EasyVat has been enabled.</td> <td>Supply each row which has a custom VAT rate with an account.</td> </tr> </table> Note: The <b>EuQuarterlyReport</b> property will become obsolete at 2021-12-01. This property is currently used by the <b>Quarterly</b> report as one of the conditions that determine if an invoice should be included in the report or not. A new version of the <b>Quarterly</b> report is released at 2021-12-01. In the new report, this property will not be used when determining if an invoice should be included in the report or not, with one exception: if the invoice is created before 2021-12-01, and this property is false, the invoice will be excluded from the report. For invoices created 2021-12-01 and later, this property will have no effect.
     *
     * @tags InvoicesResource
     * @name CreateInvoicesResource
     * @summary Create an invoice
     * @request POST:/3/invoices
     * @response `200` `InvoiceWrap` the created invoice
     */
    createInvoicesResource: (invoicePayload: InvoicePayloadWrap, params: RequestParams = {}) =>
      this.request<InvoiceWrap, any>({
        path: `/3/invoices`,
        method: "POST",
        body: invoicePayload,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InvoicesResource
     * @name BookkeepInvoicesResource
     * @summary Bookkeep an invoice
     * @request PUT:/3/invoices/{DocumentNumber}/bookkeep
     * @response `200` `InvoiceWrap` the updated invoice
     */
    bookkeepInvoicesResource: (documentNumber: string, params: RequestParams = {}) =>
      this.request<InvoiceWrap, any>({
        path: `/3/invoices/${documentNumber}/bookkeep`,
        method: "PUT",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InvoicesResource
     * @name Cancel
     * @summary Cancel an invoice
     * @request PUT:/3/invoices/{DocumentNumber}/cancel
     * @response `200` `InvoiceWrap` the updated invoice
     */
    cancel: (documentNumber: string, params: RequestParams = {}) =>
      this.request<InvoiceWrap, any>({
        path: `/3/invoices/${documentNumber}/cancel`,
        method: "PUT",
        format: "json",
        ...params,
      }),

    /**
     * @description The created credit invoice will be referenced in the property CreditInvoiceReference.
     *
     * @tags InvoicesResource
     * @name Credit
     * @summary Credit an invoice
     * @request PUT:/3/invoices/{DocumentNumber}/credit
     * @response `200` `InvoiceWrap` the updated invoice
     */
    credit: (documentNumber: string, params: RequestParams = {}) =>
      this.request<InvoiceWrap, any>({
        path: `/3/invoices/${documentNumber}/credit`,
        method: "PUT",
        format: "json",
        ...params,
      }),

    /**
     * @description Use this endpoint to set invoice as sent, without generating an invoice.
     *
     * @tags InvoicesResource
     * @name ExternalPrint
     * @summary Set an invoice as sent
     * @request PUT:/3/invoices/{DocumentNumber}/externalprint
     * @response `200` `InvoiceWrap` the updated invoice
     */
    externalPrint: (documentNumber: string, params: RequestParams = {}) =>
      this.request<InvoiceWrap, any>({
        path: `/3/invoices/${documentNumber}/externalprint`,
        method: "PUT",
        format: "json",
        ...params,
      }),

    /**
     * @description Used for marking a document as ready in the warehouse module. DeliveryState needs to be set to &quot;delivery&quot;.
     *
     * @tags InvoicesResource
     * @name WarehouseReady
     * @summary Set an invoice as done
     * @request PUT:/3/invoices/{DocumentNumber}/warehouseready
     * @response `200` `InvoiceWrap` the updated invoice
     */
    warehouseReady: (documentNumber: string, params: RequestParams = {}) =>
      this.request<InvoiceWrap, any>({
        path: `/3/invoices/${documentNumber}/warehouseready`,
        method: "PUT",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InvoicesResource
     * @name Print
     * @summary Print an invoice
     * @request GET:/3/invoices/{DocumentNumber}/print
     * @response `200` `string` the invoice as PDF
     */
    print: (documentNumber: string, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/3/invoices/${documentNumber}/print`,
        method: "GET",
        ...params,
      }),

    /**
     * @description You can use the properties in the EmailInformation to customize the e-mail message on each invoice.
     *
     * @tags InvoicesResource
     * @name Email
     * @summary Send an invoice as email
     * @request GET:/3/invoices/{DocumentNumber}/email
     * @response `200` `InvoiceWrap` sent invoice
     */
    email: (documentNumber: string, params: RequestParams = {}) =>
      this.request<InvoiceWrap, any>({
        path: `/3/invoices/${documentNumber}/email`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InvoicesResource
     * @name PrintReminder
     * @summary Print an invoice as reminder
     * @request GET:/3/invoices/{DocumentNumber}/printreminder
     * @response `200` `string` the invoice as PDF
     */
    printReminder: (documentNumber: string, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/3/invoices/${documentNumber}/printreminder`,
        method: "GET",
        ...params,
      }),

    /**
     * @description The difference between this and the print-endpoint is that property Sent is not set to TRUE.
     *
     * @tags InvoicesResource
     * @name Preview
     * @summary Preview an invoice
     * @request GET:/3/invoices/{DocumentNumber}/preview
     * @response `200` `string` the invoice as PDF
     */
    preview: (documentNumber: string, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/3/invoices/${documentNumber}/preview`,
        method: "GET",
        responseType: "arraybuffer",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InvoicesResource
     * @name EPrint
     * @summary Send an invoice as e-print
     * @request GET:/3/invoices/{DocumentNumber}/eprint
     * @response `200` `InvoiceWrap` sent invoice
     */
    ePrint: (documentNumber: string, params: RequestParams = {}) =>
      this.request<InvoiceWrap, any>({
        path: `/3/invoices/${documentNumber}/eprint`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InvoicesResource
     * @name EInvoice
     * @summary Send an invoice as e-invoice
     * @request GET:/3/invoices/{DocumentNumber}/einvoice
     * @response `200` `InvoiceWrap` sent invoice
     */
    eInvoice: (documentNumber: string, params: RequestParams = {}) =>
      this.request<InvoiceWrap, any>({
        path: `/3/invoices/${documentNumber}/einvoice`,
        method: "GET",
        format: "json",
        ...params,
      }),
  }
  labels = {
    /**
     * No description
     *
     * @tags LabelsResource
     * @name ListLabelsResource
     * @summary Retrieve a list of labels
     * @request GET:/3/labels
     * @response `200` `LabelList` list of labels
     */
    listLabelsResource: (params: RequestParams = {}) =>
      this.request<LabelList, any>({
        path: `/3/labels`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description The created label will be returned if everything succeeded, if there was any problems an error will be returned.
     *
     * @tags LabelsResource
     * @name CreateLabelsResource
     * @summary Create a label
     * @request POST:/3/labels
     * @response `200` `LabelWrap` the created label
     */
    createLabelsResource: (label: LabelWrap, params: RequestParams = {}) =>
      this.request<LabelWrap, any>({
        path: `/3/labels`,
        method: "POST",
        body: label,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Updates the specified label with the values provided in the properties. Any property not provided will be left unchanged.
     *
     * @tags LabelsResource
     * @name UpdateLabelsResource
     * @summary Update a label
     * @request PUT:/3/labels/{Id}
     * @response `200` `LabelWrap` the updated label
     */
    updateLabelsResource: (id: number, label: LabelWrap, params: RequestParams = {}) =>
      this.request<LabelWrap, any>({
        path: `/3/labels/${id}`,
        method: "PUT",
        body: label,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes the label and its connection to documents permanently. You need to supply the unique label id that was returned when the label was created or retrieved from the list of labels.
     *
     * @tags LabelsResource
     * @name RemoveLabelsResource
     * @summary Delete a label
     * @request DELETE:/3/labels/{Id}
     * @response `default` `void` empty
     */
    removeLabelsResource: (id: number, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/3/labels/${id}`,
        method: "DELETE",
        ...params,
      }),
  }
  me = {
    /**
 * No description
 *
 * @tags MeResource
 * @name GetMeResource
 * @summary Retrieve user information
 Use this endpoint to retrieve user information related to the used access token
 * @request GET:/3/me
 * @response `200` `MeWrap` user information
 */
    getMeResource: (params: RequestParams = {}) =>
      this.request<MeWrap, any>({
        path: `/3/me`,
        method: "GET",
        format: "json",
        ...params,
      }),
  }
  modesofpayments = {
    /**
     * @description The modes of payments register can return a list of records or a single record. By specifying a Code in the URL, a single record will be returned. Not specifying a Code will return a list of records.
     *
     * @tags ModesOfPaymentsResource
     * @name ListModesOfPaymentsResource
     * @summary Retrieve a list of modes of payments
     * @request GET:/3/modesofpayments
     * @response `200` `ModeOfPaymentList` a list of modes of payments.
     */
    listModesOfPaymentsResource: (params: RequestParams = {}) =>
      this.request<ModeOfPaymentList, any>({
        path: `/3/modesofpayments`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ModesOfPaymentsResource
     * @name CreateModesOfPaymentsResource
     * @summary Create a mode of payment
     * @request POST:/3/modesofpayments
     * @response `200` `ModeOfPaymentWrap` the created mode of payment
     */
    createModesOfPaymentsResource: (modeOfPayment: ModeOfPaymentWrap, params: RequestParams = {}) =>
      this.request<ModeOfPaymentWrap, any>({
        path: `/3/modesofpayments`,
        method: "POST",
        body: modeOfPayment,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ModesOfPaymentsResource
     * @name GetModesOfPaymentsResource
     * @summary Retrieve a single mode of payment
     * @request GET:/3/modesofpayments/{Code}
     * @response `200` `ModeOfPaymentWrap` the existing mode of payment
     */
    getModesOfPaymentsResource: (code: string, params: RequestParams = {}) =>
      this.request<ModeOfPaymentWrap, any>({
        path: `/3/modesofpayments/${code}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ModesOfPaymentsResource
     * @name UpdateModesOfPaymentsResource
     * @summary Update a mode of payment
     * @request PUT:/3/modesofpayments/{Code}
     * @response `200` `ModeOfPaymentWrap` the updated mode of payment
     */
    updateModesOfPaymentsResource: (code: string, unit: ModeOfPaymentWrap, params: RequestParams = {}) =>
      this.request<ModeOfPaymentWrap, any>({
        path: `/3/modesofpayments/${code}`,
        method: "PUT",
        body: unit,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  }
  offers = {
    /**
     * No description
     *
     * @tags OffersResource
     * @name ListOffersResource
     * @summary Retrieve a list of offers
     * @request GET:/3/offers/
     * @response `200` `OfferListItemList` list of offers
     */
    listOffersResource: (
      query?: {
        /** possibility to filter offers */
        filter?: "cancelled" | "expired" | "completed" | "notcompleted" | "ordercreated" | "ordernotcreated"
        /** filter by customer name */
        customername?: string
        /** filter by customer number */
        customernumber?: string
        /** filter by document number */
        documentnumber?: string
        /** filter by cost center */
        costcenter?: string
        /** filter by label */
        label?: string
        /** filter by from date */
        fromdate?: string
        /** filter by to date */
        todate?: string
        /** filter by project */
        project?: string
        /** filter by sent */
        sent?: boolean
        /** filter by not completed */
        notcompleted?: boolean
        /** filter by our reference */
        ourreference?: string
        /** filter by your reference */
        yourreference?: string
        /** filter by last modified */
        lastmodified?: string
        /** sort returned list of offers */
        sortby?: "customerName" | "id" | "transactionDate" | "total"
      },
      params: RequestParams = {}
    ) =>
      this.request<OfferListItemList, any>({
        path: `/3/offers/`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description An endpoint for creating an offer. Should you have EasyVat enabled, it is mandatory to provide an account in the request should you use a custom VAT rate. This endpoint can produce errors, some of which may only be relevant for EasyVat. Refer to the table below. <table> <caption>Errors that can be raised by this endpoint.</caption> <tr> <th>Error Code</th> <th>HTTP Code</th> <th>Description</th> <th>Solution</th> </tr> <tr> <td>2004167</td> <td>400</td> <td>An account must be provided when using a custom VAT rate and EasyVat has been enabled.</td> <td>Supply each row which has a custom VAT rate with an account.</td> </tr> </table>
     *
     * @tags OffersResource
     * @name CreateOffersResource
     * @summary Create an offer
     * @request POST:/3/offers/
     * @response `200` `OfferWrap` the created offer
     */
    createOffersResource: (offer: OfferWrap, params: RequestParams = {}) =>
      this.request<OfferWrap, any>({
        path: `/3/offers/`,
        method: "POST",
        body: offer,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags OffersResource
     * @name GetOffersResource
     * @summary Retrieve a single offer
     * @request GET:/3/offers/{DocumentNumber}
     * @response `200` `OfferWrap` the existing offer
     */
    getOffersResource: (documentNumber: string, params: RequestParams = {}) =>
      this.request<OfferWrap, any>({
        path: `/3/offers/${documentNumber}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Note that there are two approaches for updating the rows on an offer. If RowId is not specified on any row, the rows will be mapped and updated in the order in which they are set in the array. All rows that should remain on the offer needs to be provided. If RowId is specified on one or more rows the following goes: Corresponding row with that id will be updated. The rows without RowId will be interpreted as new rows. If a row should not be updated but remain on the offer then specify only RowId like { "RowId": 123 }, otherwise it will be removed. Note that new RowIds are generated for all rows every time an offer is updated.
     *
     * @tags OffersResource
     * @name UpdateOffersResource
     * @summary Update an offer
     * @request PUT:/3/offers/{DocumentNumber}
     * @response `200` `OfferWrap` the updated offer
     */
    updateOffersResource: (documentNumber: string, offer: OfferWrap, params: RequestParams = {}) =>
      this.request<OfferWrap, any>({
        path: `/3/offers/${documentNumber}`,
        method: "PUT",
        body: offer,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags OffersResource
     * @name PrintOffersResource
     * @summary Print given offer
     * @request GET:/3/offers/{DocumentNumber}/print
     * @response `200` `string` the existing offer
     */
    printOffersResource: (documentNumber: string, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/3/offers/${documentNumber}/print`,
        method: "GET",
        ...params,
      }),

    /**
     * @description You can use the properties in the EmailInformation to customize the e-mail message on each offer.
     *
     * @tags OffersResource
     * @name EmailOffersResource
     * @summary Send given offer as email
     * @request GET:/3/offers/{DocumentNumber}/email
     * @response `200` `OfferWrap` the existing offer
     */
    emailOffersResource: (documentNumber: string, params: RequestParams = {}) =>
      this.request<OfferWrap, any>({
        path: `/3/offers/${documentNumber}/email`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description The difference between this and the print-endpoint is that property Sent is not set to TRUE.
     *
     * @tags OffersResource
     * @name PreviewOffersResource
     * @summary Preview given offer
     * @request GET:/3/offers/{DocumentNumber}/preview
     * @response `200` `string` the existing offer
     */
    previewOffersResource: (documentNumber: string, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/3/offers/${documentNumber}/preview`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags OffersResource
     * @name Createorder
     * @summary Create order out of given offer
     * @request PUT:/3/offers/{DocumentNumber}/createorder
     * @response `200` `OrderWrap` the created order
     */
    createorder: (documentNumber: string, params: RequestParams = {}) =>
      this.request<OrderWrap, any>({
        path: `/3/offers/${documentNumber}/createorder`,
        method: "PUT",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags OffersResource
     * @name CreateinvoiceOffersResource
     * @summary Create invoice out of given offer
     * @request PUT:/3/offers/{DocumentNumber}/createinvoice
     * @response `200` `OrderWrap` the created invoice
     */
    createinvoiceOffersResource: (documentNumber: string, params: RequestParams = {}) =>
      this.request<OrderWrap, any>({
        path: `/3/offers/${documentNumber}/createinvoice`,
        method: "PUT",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags OffersResource
     * @name CancelOffersResource
     * @summary Cancels given offer
     * @request PUT:/3/offers/{DocumentNumber}/cancel
     * @response `200` `OfferWrap` the updated offer
     */
    cancelOffersResource: (documentNumber: string, params: RequestParams = {}) =>
      this.request<OfferWrap, any>({
        path: `/3/offers/${documentNumber}/cancel`,
        method: "PUT",
        format: "json",
        ...params,
      }),

    /**
     * @description Use this endpoint to set offer as sent, without generating an offer.
     *
     * @tags OffersResource
     * @name Externalprint
     * @summary Set given offer as sent
     * @request PUT:/3/offers/{DocumentNumber}/externalprint
     * @response `200` `OfferWrap` the updated offer
     */
    externalprint: (documentNumber: string, params: RequestParams = {}) =>
      this.request<OfferWrap, any>({
        path: `/3/offers/${documentNumber}/externalprint`,
        method: "PUT",
        format: "json",
        ...params,
      }),
  }
  orders = {
    /**
     * No description
     *
     * @tags OrdersResource
     * @name ListOrdersResource
     * @summary Retrieve a list of orders
     * @request GET:/3/orders/
     * @response `200` `OrderListItemList` list of orders
     */
    listOrdersResource: (
      query?: {
        /** possibility to filter orders */
        filter?: "cancelled" | "expired" | "invoicecreated" | "invoicenotcreated"
        /** filter by customer name */
        customername?: string
        /** filter by customer number */
        customernumber?: string
        /** filter by label */
        label?: string
        /** filter by document number */
        documentnumber?: string
        /** filter by external invoice reference 1 */
        externalinvoicereference1?: string
        /** filter by external invoice reference 2 */
        externalinvoicereference2?: string
        /** filter by from date */
        fromdate?: string
        /** filter by to date */
        todate?: string
        /** filter by cost center */
        costcenter?: string
        /** filter by project */
        project?: string
        /** filter by sent */
        sent?: boolean
        /** filter by not completed */
        notcompleted?: boolean
        /** filter by ourreference */
        ourreference?: string
        /** filter by your reference */
        yourreference?: string
        /** filter by lastmodified */
        lastmodified?: string
        /** filter by order type */
        ordertype?: string
        /** field to sort returned list */
        sortby?: "customername" | "customernumber" | "orderdate" | "documentnumber" | "total"
      },
      params: RequestParams = {}
    ) =>
      this.request<OrderListItemList, any>({
        path: `/3/orders/`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description An endpoint for creating an order. Should you have EasyVat enabled, it is mandatory to provide an account in the request should you use a custom VAT rate. This endpoint can produce errors, some of which may only be relevant for EasyVat. Refer to the table below. <table> <caption>Errors that can be raised by this endpoint.</caption> <tr> <th>Error Code</th> <th>HTTP Code</th> <th>Description</th> <th>Solution</th> </tr> <tr> <td>2004167</td> <td>400</td> <td>An account must be provided when using a custom VAT rate and EasyVat has been enabled.</td> <td>Supply each row which has a custom VAT rate with an account.</td> </tr> </table>
     *
     * @tags OrdersResource
     * @name CreateOrdersResource
     * @summary Create a new order
     * @request POST:/3/orders/
     * @response `200` `OrderWrap` the created order
     */
    createOrdersResource: (order: OrderWrap, params: RequestParams = {}) =>
      this.request<OrderWrap, any>({
        path: `/3/orders/`,
        method: "POST",
        body: order,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags OrdersResource
     * @name GetOrdersResource
     * @summary Retrieve a single order
     * @request GET:/3/orders/{DocumentNumber}
     * @response `200` `OrderWrap` the existing order
     */
    getOrdersResource: (documentNumber: string, params: RequestParams = {}) =>
      this.request<OrderWrap, any>({
        path: `/3/orders/${documentNumber}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Note that there are two approaches for updating the rows on an order. If RowId is not specified on any row, the rows will be mapped and updated in the order in which they are set in the array. All rows that should remain on the order needs to be provided. If RowId is specified on one or more rows the following goes: Corresponding row with that id will be updated. The rows without RowId will be interpreted as new rows. If a row should not be updated but remain on the order then specify only RowId like { "RowId": 123 }, otherwise it will be removed. Note that new RowIds are generated for all rows every time an order is updated.
     *
     * @tags OrdersResource
     * @name UpdateOrdersResource
     * @summary Update an order
     * @request PUT:/3/orders/{DocumentNumber}
     * @response `200` `OrderWrap` the updated order
     */
    updateOrdersResource: (documentNumber: string, order: OrderWrap, params: RequestParams = {}) =>
      this.request<OrderWrap, any>({
        path: `/3/orders/${documentNumber}`,
        method: "PUT",
        body: order,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags OrdersResource
     * @name PrintOrdersResource
     * @summary Print given order
     * @request GET:/3/orders/{DocumentNumber}/print
     * @response `200` `string` the given order as PDF
     */
    printOrdersResource: (documentNumber: string, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/3/orders/${documentNumber}/print`,
        method: "GET",
        ...params,
      }),

    /**
     * @description You can use the properties in the EmailInformation to customize the e-mail message on each order.
     *
     * @tags OrdersResource
     * @name EmailOrdersResource
     * @summary Send given order as email
     * @request GET:/3/orders/{DocumentNumber}/email
     * @response `200` `OrderWrap` the existing order
     */
    emailOrdersResource: (documentNumber: string, params: RequestParams = {}) =>
      this.request<OrderWrap, any>({
        path: `/3/orders/${documentNumber}/email`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description The difference between this and the print-endpoint is that property Sent is not set to TRUE.
     *
     * @tags OrdersResource
     * @name PreviewOrdersResource
     * @summary Preview given offer
     * @request GET:/3/orders/{DocumentNumber}/preview
     * @response `200` `string` the given order as PDF
     */
    previewOrdersResource: (documentNumber: string, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/3/orders/${documentNumber}/preview`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags OrdersResource
     * @name CreateinvoiceOrdersResource
     * @summary Create invoice out of given order
     * @request PUT:/3/orders/{DocumentNumber}/createinvoice
     * @response `200` `InvoiceWrap` the created invoice
     */
    createinvoiceOrdersResource: (documentNumber: string, params: RequestParams = {}) =>
      this.request<InvoiceWrap, any>({
        path: `/3/orders/${documentNumber}/createinvoice`,
        method: "PUT",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags OrdersResource
     * @name CancelOrdersResource
     * @summary Cancels given order
     * @request PUT:/3/orders/{DocumentNumber}/cancel
     * @response `200` `OrderWrap` the updated order
     */
    cancelOrdersResource: (documentNumber: string, params: RequestParams = {}) =>
      this.request<OrderWrap, any>({
        path: `/3/orders/${documentNumber}/cancel`,
        method: "PUT",
        format: "json",
        ...params,
      }),

    /**
     * @description Use this endpoint to set order as sent, without generating an order.
     *
     * @tags OrdersResource
     * @name ExternalprintOrdersResource
     * @summary Set given order as sent
     * @request PUT:/3/orders/{DocumentNumber}/externalprint
     * @response `200` `OrderWrap` the updated order
     */
    externalprintOrdersResource: (documentNumber: string, params: RequestParams = {}) =>
      this.request<OrderWrap, any>({
        path: `/3/orders/${documentNumber}/externalprint`,
        method: "PUT",
        format: "json",
        ...params,
      }),
  }
  predefinedaccounts = {
    /**
     * No description
     *
     * @tags PredefinedAccountsResource
     * @name ListPredefinedAccountsResource
     * @summary Retrieve a list of all predefined accounts
     * @request GET:/3/predefinedaccounts/
     * @response `200` `PredefinedAccountList` list of predefined accounts
     */
    listPredefinedAccountsResource: (params: RequestParams = {}) =>
      this.request<PredefinedAccountList, any>({
        path: `/3/predefinedaccounts/`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PredefinedAccountsResource
     * @name GetPredefinedAccountsResource
     * @summary Retrieve information for a specific account type
     * @request GET:/3/predefinedaccounts/{name}
     * @response `200` `PredefinedAccountWrap` the existing predefined account
     */
    getPredefinedAccountsResource: (name: string, params: RequestParams = {}) =>
      this.request<PredefinedAccountWrap, any>({
        path: `/3/predefinedaccounts/${name}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description An endpoint for updating a Predefined Account. Predefined Accounts are identified by their <em>name</em>-field, and as such must be unique. Some Predefined Accounts distinguish between Goods and Services. In this case, the former retains the original name whereas the latter ends with a 2. Such as <em>SALES</em> and <em>SALES2</em>. Accounts are chosen from the Account Registry, and if you have EasyVat enabled then the new EasyVat Predefined Accounts (<em>SALES_25_SE</em>, etc.) have certain restrictions on the accounts that can be selected. Refer to the table below. <table> <caption>Account restrictions when EasyVat has been enabled.</caption> <tr> <th>Name</th> <th>VAT Code</th> <th>Restrictions</th> </tr> <tr> <td>SALES_25_SE</td> <td>MP1</td> <td>Must have a compatible VAT Code.</td> </tr> <tr> <td>SALES_12_SE</td> <td>MP2</td> <td>Must have a compatible VAT Code.</td> </tr> <tr> <td>SALES_6_SE</td> <td>MP3</td> <td>Must have a compatible VAT Code.</td> </tr> <tr> <td>SALES_0_SE</td> <td>MF</td> <td>Must have a compatible VAT Code.</td> </tr> </table> This endpoint can produce errors, some of which may only be relevant for EasyVat. Refer to the table below. <table> <caption>Errors that can be raised by this endpoint.</caption> <tr> <th>Error Code</th> <th>HTTP Code</th> <th>Description</th> <th>Solution</th> </tr> <tr> <td>2001265</td> <td>400</td> <td>The provided account is invalid. It either has not been provided, does not exist, or is inactive.</td> <td>Verify that an account has been provided and that it exists and is active.</td> </tr> <tr> <td>2002462</td> <td>400</td> <td>The account is not in a valid format.</td> <td>Verify that the format of the account is correct. It has to consist of 4 digits.</td> </tr> <tr> <td>2000729</td> <td>400</td> <td>A Predefined Account has not been provided.</td> <td>Verify that a valid Predefined Account has been provided as a PATH-parameter.</td> </tr> <tr> <td>2004052</td> <td>400</td> <td>The provided account has an incompatible VAT Code. Only applies if EasyVat has been enabled.</td> <td>Verify that the provided account has a VAT Code that is compatible with the selected Predefined Account. Refer to the table above for more information about compatibility.</td> </tr> </table> If you have activated EasyVat, you can read more about how to use the new Predefined Accounts with your documents in their respective api documentation.
     *
     * @tags PredefinedAccountsResource
     * @name UpdatePredefinedAccountsResource
     * @summary Update a Predefined Account
     * @request PUT:/3/predefinedaccounts/{name}
     * @response `200` `PredefinedAccountWrap` the updated predefined account
     */
    updatePredefinedAccountsResource: (
      name: string,
      predefinedAccount: PredefinedAccountWrap,
      params: RequestParams = {}
    ) =>
      this.request<PredefinedAccountWrap, any>({
        path: `/3/predefinedaccounts/${name}`,
        method: "PUT",
        body: predefinedAccount,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  }
  predefinedvoucherseries = {
    /**
     * No description
     *
     * @tags PredefinedVoucherSeriesResource
     * @name ListPredefinedVoucherSeriesResource
     * @summary Retrieve a list of predefined voucher series
     * @request GET:/3/predefinedvoucherseries/
     * @response `200` `PredefinedVoucherSeriesList` a list of predefined voucher series
     */
    listPredefinedVoucherSeriesResource: (params: RequestParams = {}) =>
      this.request<PredefinedVoucherSeriesList, any>({
        path: `/3/predefinedvoucherseries/`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PredefinedVoucherSeriesResource
     * @name GetPredefinedVoucherSeriesResource
     * @summary Retrieve a specific predefined voucher series
     * @request GET:/3/predefinedvoucherseries/{Name}
     * @response `200` `PredefinedVoucherSeriesWrap` a list of predefined voucher series
     */
    getPredefinedVoucherSeriesResource: (name: string, params: RequestParams = {}) =>
      this.request<PredefinedVoucherSeriesWrap, any>({
        path: `/3/predefinedvoucherseries/${name}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PredefinedVoucherSeriesResource
     * @name UpdatePredefinedVoucherSeriesResource
     * @summary Update a predefined voucher series
     * @request PUT:/3/predefinedvoucherseries/{Name}
     * @response `200` `PredefinedVoucherSeriesWrap` the updated predefined voucher series
     */
    updatePredefinedVoucherSeriesResource: (
      name: string,
      predefinedVoucherSeries: PredefinedVoucherSeriesWrap,
      params: RequestParams = {}
    ) =>
      this.request<PredefinedVoucherSeriesWrap, any>({
        path: `/3/predefinedvoucherseries/${name}`,
        method: "PUT",
        body: predefinedVoucherSeries,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  }
  pricelists = {
    /**
     * @description The price lists register can return a list of records or a single record. By specifying a Code in the URL, a single record will be returned. Not specifying a Code will return a list of records.
     *
     * @tags PriceListsResource
     * @name ListPriceListsResource
     * @summary Retrieve a list of price lists
     * @request GET:/3/pricelists
     * @response `200` `PriceListList` all price lists
     */
    listPriceListsResource: (params: RequestParams = {}) =>
      this.request<PriceListList, any>({
        path: `/3/pricelists`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PriceListsResource
     * @name CreatePriceListsResource
     * @summary Create a price list
     * @request POST:/3/pricelists
     * @response `200` `PriceListWrap` the created price list
     */
    createPriceListsResource: (priceList: PriceListWrap, params: RequestParams = {}) =>
      this.request<PriceListWrap, any>({
        path: `/3/pricelists`,
        method: "POST",
        body: priceList,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PriceListsResource
     * @name GetPriceListsResource
     * @summary Retrieve a single price list
     * @request GET:/3/pricelists/{Code}
     * @response `200` `PriceListWrap` the existing price list
     */
    getPriceListsResource: (code: string, params: RequestParams = {}) =>
      this.request<PriceListWrap, any>({
        path: `/3/pricelists/${code}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PriceListsResource
     * @name UpdatePriceListsResource
     * @summary Update a price list
     * @request PUT:/3/pricelists/{Code}
     * @response `200` `PriceListWrap` the updated price list
     */
    updatePriceListsResource: (code: string, priceList: PriceListWrap, params: RequestParams = {}) =>
      this.request<PriceListWrap, any>({
        path: `/3/pricelists/${code}`,
        method: "PUT",
        body: priceList,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  }
  prices = {
    /**
     * No description
     *
     * @tags PricesResource
     * @name GetPricesResource
     * @summary Retrieve a price for a specified article
     * @request GET:/3/prices/{PriceList}/{ArticleNumber}/{FromQuantity}
     * @response `200` `PriceWrap` the price for a specified article
     */
    getPricesResource: (
      priceList: string,
      articleNumber: string,
      fromQuantity: number,
      params: RequestParams = {}
    ) =>
      this.request<PriceWrap, any>({
        path: `/3/prices/${priceList}/${articleNumber}/${fromQuantity}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PricesResource
     * @name UpdatePricesResource
     * @summary Update a price
     * @request PUT:/3/prices/{PriceList}/{ArticleNumber}/{FromQuantity}
     * @response `200` `PriceWrap` the updated price
     */
    updatePricesResource: (
      priceList: string,
      articleNumber: string,
      fromQuantity: number,
      price: PriceWrap,
      params: RequestParams = {}
    ) =>
      this.request<PriceWrap, any>({
        path: `/3/prices/${priceList}/${articleNumber}/${fromQuantity}`,
        method: "PUT",
        body: price,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PricesResource
     * @name RemovePricesResource
     * @summary Delete a single price
     * @request DELETE:/3/prices/{PriceList}/{ArticleNumber}/{FromQuantity}
     * @response `default` `void` empty
     */
    removePricesResource: (
      priceList: string,
      articleNumber: string,
      fromQuantity: number,
      params: RequestParams = {}
    ) =>
      this.request<any, void>({
        path: `/3/prices/${priceList}/${articleNumber}/${fromQuantity}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description The list contains a slimmer version of the prices. To get a full entity, use the GET with a price list, article number and from quantity.
     *
     * @tags PricesResource
     * @name ListPricesResource
     * @summary Retrieve a list of articles with all their prices in the specified price list
     * @request GET:/3/prices/sublist/{PriceList}/{ArticleNumber}
     * @response `200` `PriceListItemList` list of prices
     */
    listPricesResource: (priceList: string, articleNumber: string, params: RequestParams = {}) =>
      this.request<PriceListItemList, any>({
        path: `/3/prices/sublist/${priceList}/${articleNumber}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PricesResource
     * @name GetFirstPrice
     * @summary Retrieve the first price for the specified article
     * @request GET:/3/prices/{PriceList}/{ArticleNumber}
     * @response `200` `PriceWrap` the first price for the specified article
     */
    getFirstPrice: (priceList: string, articleNumber: string, params: RequestParams = {}) =>
      this.request<PriceWrap, any>({
        path: `/3/prices/${priceList}/${articleNumber}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PricesResource
     * @name UpdatePricesResource1
     * @summary Update the first price in the specified article
     * @request PUT:/3/prices/{PriceList}/{ArticleNumber}
     * @response `200` `PriceWrap` the updated price
     */
    updatePricesResource1: (
      priceList: string,
      articleNumber: string,
      price: PriceWrap,
      params: RequestParams = {}
    ) =>
      this.request<PriceWrap, any>({
        path: `/3/prices/${priceList}/${articleNumber}`,
        method: "PUT",
        body: price,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PricesResource
     * @name CreatePricesResource
     * @summary Create a price
     * @request POST:/3/prices/
     * @response `200` `PriceWrap` the created price
     */
    createPricesResource: (price: PriceWrap, params: RequestParams = {}) =>
      this.request<PriceWrap, any>({
        path: `/3/prices/`,
        method: "POST",
        body: price,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  }
  printtemplates = {
    /**
     * No description
     *
     * @tags PrintTemplatesResource
     * @name ListPrintTemplatesResource
     * @summary Retrieve a list of print templates
     * @request GET:/3/printtemplates
     * @response `200` `PrintTemplateList` a list of print templates.
     */
    listPrintTemplatesResource: (params: RequestParams = {}) =>
      this.request<PrintTemplateList, any>({
        path: `/3/printtemplates`,
        method: "GET",
        format: "json",
        ...params,
      }),
  }
  projects = {
    /**
     * No description
     *
     * @tags ProjectsResource
     * @name GetProjectsResource
     * @summary Retrieve a single project
     * @request GET:/3/projects/{ProjectNumber}
     * @response `200` `ProjectWrap` the existing project
     */
    getProjectsResource: (projectNumber: number, params: RequestParams = {}) =>
      this.request<ProjectWrap, any>({
        path: `/3/projects/${projectNumber}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ProjectsResource
     * @name UpdateProjectsResource
     * @summary Update a project
     * @request PUT:/3/projects/{ProjectNumber}
     * @response `200` `ProjectWrap` the updated project
     */
    updateProjectsResource: (projectNumber: number, project: ProjectWrap, params: RequestParams = {}) =>
      this.request<ProjectWrap, any>({
        path: `/3/projects/${projectNumber}`,
        method: "PUT",
        body: project,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ProjectsResource
     * @name RemoveProjectsResource
     * @summary Remove a project
     * @request DELETE:/3/projects/{ProjectNumber}
     * @response `default` `void` empty
     */
    removeProjectsResource: (projectNumber: number, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/3/projects/${projectNumber}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description The project register can return a list of records or a single record. By specifying a ProjectNumber in the URL, a single record will be returned. If no ProjectNumber is provided, a list of records will be returned.
     *
     * @tags ProjectsResource
     * @name ListProjectsResource
     * @summary Retrieve a list of projects
     * @request GET:/3/projects
     * @response `200` `ProjectListItemList` list of projects
     */
    listProjectsResource: (params: RequestParams = {}) =>
      this.request<ProjectListItemList, any>({
        path: `/3/projects`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ProjectsResource
     * @name CreateProjectsResource
     * @summary Create a project
     * @request POST:/3/projects
     * @response `200` `ProjectWrap` the created project
     */
    createProjectsResource: (project: ProjectWrap, params: RequestParams = {}) =>
      this.request<ProjectWrap, any>({
        path: `/3/projects`,
        method: "POST",
        body: project,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  }
  salarytransactions = {
    /**
     * @description Supports query-string parameters <b>employeeid</b> and <b>date</b> for filtering the result.
     *
     * @tags SalaryTransactionsResource
     * @name ListSalaryTransactionsResource
     * @summary List all salary transactions for all employees
     * @request GET:/3/salarytransactions
     * @response `200` `SalaryTransactionListItemList` list of salary transactions
     */
    listSalaryTransactionsResource: (
      query?: {
        /** filter on employeeId */
        employeeId?: string
        /**
         * filter on date
         * @format date
         */
        date?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<SalaryTransactionListItemList, any>({
        path: `/3/salarytransactions`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SalaryTransactionsResource
     * @name CreateSalaryTransactionsResource
     * @summary Create a new salary transaction for an employee
     * @request POST:/3/salarytransactions
     * @response `200` `SalaryTransactionWrap` the created salary transaction
     */
    createSalaryTransactionsResource: (
      salaryTransaction: SalaryTransactionWrap,
      params: RequestParams = {}
    ) =>
      this.request<SalaryTransactionWrap, any>({
        path: `/3/salarytransactions`,
        method: "POST",
        body: salaryTransaction,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SalaryTransactionsResource
     * @name GetSalaryTransactionsResource
     * @summary Retrieve a single salary transaction
     * @request GET:/3/salarytransactions/{SalaryRow}
     * @response `200` `SalaryTransactionWrap` the existing salary transaction
     */
    getSalaryTransactionsResource: (salaryRow: number, params: RequestParams = {}) =>
      this.request<SalaryTransactionWrap, any>({
        path: `/3/salarytransactions/${salaryRow}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SalaryTransactionsResource
     * @name UpdateSalaryTransactionsResource
     * @summary Update a salary transaction
     * @request PUT:/3/salarytransactions/{SalaryRow}
     * @response `200` `SalaryTransactionWrap` the updated salary transaction
     */
    updateSalaryTransactionsResource: (
      salaryRow: number,
      salaryTransaction: SalaryTransactionWrap,
      params: RequestParams = {}
    ) =>
      this.request<SalaryTransactionWrap, any>({
        path: `/3/salarytransactions/${salaryRow}`,
        method: "PUT",
        body: salaryTransaction,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SalaryTransactionsResource
     * @name DeleteSalaryTransactionsResource
     * @summary Delete a single salary transaction
     * @request DELETE:/3/salarytransactions/{SalaryRow}
     * @response `200` `SalaryTransactionWrap` the existing salary transaction
     */
    deleteSalaryTransactionsResource: (salaryRow: number, params: RequestParams = {}) =>
      this.request<SalaryTransactionWrap, any>({
        path: `/3/salarytransactions/${salaryRow}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),
  }
  scheduletimes = {
    /**
     * No description
     *
     * @tags ScheduleTimesResource
     * @name GetScheduleTimesResource
     * @summary Retrieve a specific schedule time
     * @request GET:/3/scheduletimes/{EmployeeId}/{Date}
     * @response `200` `ScheduleTimeWrap` the existing schedule time
     */
    getScheduleTimesResource: (employeeId: string, date: string, params: RequestParams = {}) =>
      this.request<ScheduleTimeWrap, any>({
        path: `/3/scheduletimes/${employeeId}/${date}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ScheduleTimesResource
     * @name UpdateScheduleTimesResource
     * @summary Update a schedule time
     * @request PUT:/3/scheduletimes/{EmployeeId}/{Date}
     * @response `200` `ScheduleTimeWrap` the updated schedule time
     */
    updateScheduleTimesResource: (
      employeeId: string,
      date: string,
      scheduleTime: ScheduleTimeWrap,
      params: RequestParams = {}
    ) =>
      this.request<ScheduleTimeWrap, any>({
        path: `/3/scheduletimes/${employeeId}/${date}`,
        method: "PUT",
        body: scheduleTime,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ScheduleTimesResource
     * @name Reset
     * @summary Reset schedule time
     * @request PUT:/3/scheduletimes/{EmployeeId}/{Date}/resetday
     * @response `200` `ScheduleTimeWrap` the reset schedule time
     */
    reset: (employeeId: string, date: string, params: RequestParams = {}) =>
      this.request<ScheduleTimeWrap, any>({
        path: `/3/scheduletimes/${employeeId}/${date}/resetday`,
        method: "PUT",
        format: "json",
        ...params,
      }),
  }
  sie = {
    /**
     * @description Retrieves a SIE file as streamed content
     *
     * @tags SieResource
     * @name GetSieResource
     * @summary Retrieve a SIE file
     * @request GET:/3/sie/{Type}
     * @response `default` `void` SIE file
     */
    getSieResource: (
      type: string,
      query?: {
        /**
         * financialYear
         * @format int32
         */
        financialYear?: number
      },
      params: RequestParams = {}
    ) =>
      this.request<any, void>({
        path: `/3/sie/${type}`,
        method: "GET",
        query: query,
        ...params,
      }),
  }
  supplierinvoiceaccruals = {
    /**
     * @description The supplier invoice accruals register can return a list of records or a single record. By specifying a SupplierInvoiceNumber in the URL, a single record will be returned. Not specifying a SupplierInvoiceNumber will return a list of records.
     *
     * @tags SupplierInvoiceAccrualsResource
     * @name ListSupplierInvoiceAccrualsResource
     * @summary Retrieve a list of supplier invoice accruals
     * @request GET:/3/supplierinvoiceaccruals/
     * @response `200` `SupplierInvoiceAccrualListItemList` list of supplier invoice accruals
     */
    listSupplierInvoiceAccrualsResource: (params: RequestParams = {}) =>
      this.request<SupplierInvoiceAccrualListItemList, any>({
        path: `/3/supplierinvoiceaccruals/`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SupplierInvoiceAccrualsResource
     * @name CreateSupplierInvoiceAccrualsResource
     * @summary Create a supplier invoice accrual
     * @request POST:/3/supplierinvoiceaccruals/
     * @response `200` `SupplierInvoiceAccrualWrap` the created supplier invoice accrual
     */
    createSupplierInvoiceAccrualsResource: (
      supplierInvoiceAccrual: SupplierInvoiceAccrualWrap,
      params: RequestParams = {}
    ) =>
      this.request<SupplierInvoiceAccrualWrap, any>({
        path: `/3/supplierinvoiceaccruals/`,
        method: "POST",
        body: supplierInvoiceAccrual,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SupplierInvoiceAccrualsResource
     * @name GetSupplierInvoiceAccrualsResource
     * @summary Retrieve a single supplier invoice accrual
     * @request GET:/3/supplierinvoiceaccruals/{SupplierInvoiceNumber}
     * @response `200` `SupplierInvoiceAccrualWrap` the existing supplier invoice accrual
     */
    getSupplierInvoiceAccrualsResource: (supplierInvoiceNumber: number, params: RequestParams = {}) =>
      this.request<SupplierInvoiceAccrualWrap, any>({
        path: `/3/supplierinvoiceaccruals/${supplierInvoiceNumber}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SupplierInvoiceAccrualsResource
     * @name UpdateSupplierInvoiceAccrualsResource
     * @summary Update a supplier invoice accrual
     * @request PUT:/3/supplierinvoiceaccruals/{SupplierInvoiceNumber}
     * @response `200` `SupplierInvoiceAccrualWrap` the updated supplier invoice accrual
     */
    updateSupplierInvoiceAccrualsResource: (
      supplierInvoiceNumber: number,
      supplierInvoiceAccrual: SupplierInvoiceAccrualWrap,
      params: RequestParams = {}
    ) =>
      this.request<SupplierInvoiceAccrualWrap, any>({
        path: `/3/supplierinvoiceaccruals/${supplierInvoiceNumber}`,
        method: "PUT",
        body: supplierInvoiceAccrual,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SupplierInvoiceAccrualsResource
     * @name RemoveSupplierInvoiceAccrualsResource
     * @summary Remove a supplier invoice accrual
     * @request DELETE:/3/supplierinvoiceaccruals/{SupplierInvoiceNumber}
     * @response `default` `void` empty
     */
    removeSupplierInvoiceAccrualsResource: (supplierInvoiceNumber: number, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/3/supplierinvoiceaccruals/${supplierInvoiceNumber}`,
        method: "DELETE",
        ...params,
      }),
  }
  supplierinvoiceexternalurlconnections = {
    /**
     * No description
     *
     * @tags SupplierInvoiceExternalUrlConnectionsResource
     * @name GetSupplierInvoiceExternalUrlConnectionsResource
     * @summary Retrieve a single supplier invoice external URL connection
     * @request GET:/3/supplierinvoiceexternalurlconnections/{Id}
     * @response `200` `SupplierInvoiceExternalURLConnectionSingle` supplier invoice external url connection
     */
    getSupplierInvoiceExternalUrlConnectionsResource: (id: number, params: RequestParams = {}) =>
      this.request<SupplierInvoiceExternalURLConnectionSingle, any>({
        path: `/3/supplierinvoiceexternalurlconnections/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SupplierInvoiceExternalUrlConnectionsResource
     * @name UpdateSupplierInvoiceExternalUrlConnectionsResource
     * @summary Update a supplier invoice external URL connection
     * @request PUT:/3/supplierinvoiceexternalurlconnections/{Id}
     * @response `200` `SupplierInvoiceExternalURLConnectionSingle` supplier invoice external url connection
     */
    updateSupplierInvoiceExternalUrlConnectionsResource: (
      id: number,
      request: SupplierInvoiceExternalURLConnectionUpdate,
      params: RequestParams = {}
    ) =>
      this.request<SupplierInvoiceExternalURLConnectionSingle, any>({
        path: `/3/supplierinvoiceexternalurlconnections/${id}`,
        method: "PUT",
        body: request,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SupplierInvoiceExternalUrlConnectionsResource
     * @name DeleteSupplierInvoiceExternalUrlConnectionsResource
     * @summary Remove a supplier invoice external URL connection
     * @request DELETE:/3/supplierinvoiceexternalurlconnections/{Id}
     * @response `default` `void` empty
     */
    deleteSupplierInvoiceExternalUrlConnectionsResource: (id: number, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/3/supplierinvoiceexternalurlconnections/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SupplierInvoiceExternalUrlConnectionsResource
     * @name CreateSupplierInvoiceExternalUrlConnectionsResource
     * @summary Create a supplier invoice external URL connection
     * @request POST:/3/supplierinvoiceexternalurlconnections
     * @response `200` `SupplierInvoiceExternalURLConnectionSingle` supplier invoice external url connection
     */
    createSupplierInvoiceExternalUrlConnectionsResource: (
      request: SupplierInvoiceExternalURLConnectionUpdate,
      params: RequestParams = {}
    ) =>
      this.request<SupplierInvoiceExternalURLConnectionSingle, any>({
        path: `/3/supplierinvoiceexternalurlconnections`,
        method: "POST",
        body: request,
        format: "json",
        ...params,
      }),
  }
  supplierinvoicefileconnections = {
    /**
     * @description The supplier invoice file connections register can return a list of records or a single record. By specifying a FileId in the URL, a single record will be returned. Not specifying a FileId will return a list of records.
     *
     * @tags SupplierInvoiceFileConnectionsResource
     * @name ListSupplierInvoiceFileConnectionsResource
     * @summary Retrieve a list of supplier invoice file connections
     * @request GET:/3/supplierinvoicefileconnections/
     * @response `200` `SupplierInvoiceFileConnectionList` list of file connections
     */
    listSupplierInvoiceFileConnectionsResource: (params: RequestParams = {}) =>
      this.request<SupplierInvoiceFileConnectionList, any>({
        path: `/3/supplierinvoicefileconnections/`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SupplierInvoiceFileConnectionsResource
     * @name CreateSupplierInvoiceFileConnectionsResource
     * @summary Create an supplier invoice file connection
     * @request POST:/3/supplierinvoicefileconnections/
     * @response `200` `SupplierInvoiceFileConnectionWrap` the created supplier invoice file connection
     */
    createSupplierInvoiceFileConnectionsResource: (
      fileConnection: SupplierInvoiceFileConnectionWrap,
      params: RequestParams = {}
    ) =>
      this.request<SupplierInvoiceFileConnectionWrap, any>({
        path: `/3/supplierinvoicefileconnections/`,
        method: "POST",
        body: fileConnection,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SupplierInvoiceFileConnectionsResource
     * @name GetSupplierInvoiceFileConnectionsResource
     * @summary Retrieve a single supplier invoice file connection
     * @request GET:/3/supplierinvoicefileconnections/{FileId}
     * @response `200` `SupplierInvoiceFileConnectionWrap` the existing file connection
     */
    getSupplierInvoiceFileConnectionsResource: (fileId: string, params: RequestParams = {}) =>
      this.request<SupplierInvoiceFileConnectionWrap, any>({
        path: `/3/supplierinvoicefileconnections/${fileId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SupplierInvoiceFileConnectionsResource
     * @name RemoveSupplierInvoiceFileConnectionsResource
     * @summary Remove an supplier invoice file connection
     * @request DELETE:/3/supplierinvoicefileconnections/{FileId}
     * @response `default` `void` empty
     */
    removeSupplierInvoiceFileConnectionsResource: (fileId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/3/supplierinvoicefileconnections/${fileId}`,
        method: "DELETE",
        ...params,
      }),
  }
  supplierinvoicepayments = {
    /**
     * No description
     *
     * @tags SupplierInvoicePaymentsResource
     * @name ListSupplierInvoicePaymentsResource
     * @summary Retrieve a list of supplier invoice payments
     * @request GET:/3/supplierinvoicepayments/
     * @response `200` `SupplierInvoicePaymentListItemList` list of supplier invoice payments
     */
    listSupplierInvoicePaymentsResource: (params: RequestParams = {}) =>
      this.request<SupplierInvoicePaymentListItemList, any>({
        path: `/3/supplierinvoicepayments/`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SupplierInvoicePaymentsResource
     * @name CreateSupplierInvoicePaymentsResource
     * @summary Create a supplier invoice payment
     * @request POST:/3/supplierinvoicepayments/
     * @response `200` `SupplierInvoicePaymentWrap` the created supplier invoice payment
     */
    createSupplierInvoicePaymentsResource: (
      supplierInvoicePayment: SupplierInvoicePaymentWrap,
      params: RequestParams = {}
    ) =>
      this.request<SupplierInvoicePaymentWrap, any>({
        path: `/3/supplierinvoicepayments/`,
        method: "POST",
        body: supplierInvoicePayment,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SupplierInvoicePaymentsResource
     * @name GetSupplierInvoicePaymentsResource
     * @summary Retrieve a single supplier invoice payment
     * @request GET:/3/supplierinvoicepayments/{Number}
     * @response `200` `SupplierInvoicePaymentWrap` the existing supplier invoice payment
     */
    getSupplierInvoicePaymentsResource: (number: number, params: RequestParams = {}) =>
      this.request<SupplierInvoicePaymentWrap, any>({
        path: `/3/supplierinvoicepayments/${number}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SupplierInvoicePaymentsResource
     * @name UpdateSupplierInvoicePaymentsResource
     * @summary Update a supplier invoice payment
     * @request PUT:/3/supplierinvoicepayments/{Number}
     * @response `200` `SupplierInvoicePaymentWrap` the updated supplier invoice payment
     */
    updateSupplierInvoicePaymentsResource: (
      number: number,
      supplierInvoicePayment: SupplierInvoicePaymentWrap,
      params: RequestParams = {}
    ) =>
      this.request<SupplierInvoicePaymentWrap, any>({
        path: `/3/supplierinvoicepayments/${number}`,
        method: "PUT",
        body: supplierInvoicePayment,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SupplierInvoicePaymentsResource
     * @name RemoveSupplierInvoicePaymentsResource
     * @summary Remove a supplier invoice payment
     * @request DELETE:/3/supplierinvoicepayments/{Number}
     * @response `default` `void` empty
     */
    removeSupplierInvoicePaymentsResource: (number: number, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/3/supplierinvoicepayments/${number}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SupplierInvoicePaymentsResource
     * @name BookkeepSupplierInvoicePaymentsResource
     * @summary Bookkeep a supplier invoice payment
     * @request PUT:/3/supplierinvoicepayments/{Number}/bookkeep
     * @response `200` `SupplierInvoicePaymentWrap` the updated supplier invoice payment
     */
    bookkeepSupplierInvoicePaymentsResource: (number: number, params: RequestParams = {}) =>
      this.request<SupplierInvoicePaymentWrap, any>({
        path: `/3/supplierinvoicepayments/${number}/bookkeep`,
        method: "PUT",
        format: "json",
        ...params,
      }),
  }
  supplierinvoices = {
    /**
     * No description
     *
     * @tags SupplierInvoicesResource
     * @name ListSupplierInvoicesResource
     * @summary Retrieve a list of supplier invoices
     * @request GET:/3/supplierinvoices/
     * @response `200` `SupplierInvoiceListItemWrap` list of supplier invoices
     */
    listSupplierInvoicesResource: (
      query?: {
        /** possibility to filter supplier invoices */
        filter?:
          | "cancelled"
          | "fullypaid"
          | "unpaid"
          | "unpaidoverdue"
          | "unbooked"
          | "pendingpayment"
          | "authorizepending"
      },
      params: RequestParams = {}
    ) =>
      this.request<SupplierInvoiceListItemWrap, any>({
        path: `/3/supplierinvoices/`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SupplierInvoicesResource
     * @name CreateSupplierInvoicesResource
     * @summary Create a supplier invoice
     * @request POST:/3/supplierinvoices/
     * @response `200` `SupplierInvoiceWrap` the created supplier invoice
     */
    createSupplierInvoicesResource: (supplierInvoice: SupplierInvoiceWrap, params: RequestParams = {}) =>
      this.request<SupplierInvoiceWrap, any>({
        path: `/3/supplierinvoices/`,
        method: "POST",
        body: supplierInvoice,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SupplierInvoicesResource
     * @name GetSupplierInvoicesResource
     * @summary Retrieve a single supplier invoice
     * @request GET:/3/supplierinvoices/{GivenNumber}
     * @response `200` `SupplierInvoiceWrap` the existing supplier invoice
     */
    getSupplierInvoicesResource: (givenNumber: number, params: RequestParams = {}) =>
      this.request<SupplierInvoiceWrap, any>({
        path: `/3/supplierinvoices/${givenNumber}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SupplierInvoicesResource
     * @name UpdateSupplierInvoicesResource
     * @summary Update a supplier invoice
     * @request PUT:/3/supplierinvoices/{GivenNumber}
     * @response `200` `SupplierInvoiceWrap` the updated supplier invoice
     */
    updateSupplierInvoicesResource: (
      givenNumber: number,
      supplierInvoice: SupplierInvoiceWrap,
      params: RequestParams = {}
    ) =>
      this.request<SupplierInvoiceWrap, any>({
        path: `/3/supplierinvoices/${givenNumber}`,
        method: "PUT",
        body: supplierInvoice,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SupplierInvoicesResource
     * @name BookkeepSupplierInvoicesResource
     * @summary Bookkeep given supplier invoice
     * @request PUT:/3/supplierinvoices/{GivenNumber}/bookkeep
     * @response `200` `SupplierInvoiceWrap` the updated supplier invoice
     */
    bookkeepSupplierInvoicesResource: (givenNumber: number, params: RequestParams = {}) =>
      this.request<SupplierInvoiceWrap, any>({
        path: `/3/supplierinvoices/${givenNumber}/bookkeep`,
        method: "PUT",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SupplierInvoicesResource
     * @name CancelSupplierInvoicesResource
     * @summary Cancels given supplier invoice
     * @request PUT:/3/supplierinvoices/{GivenNumber}/cancel
     * @response `200` `SupplierInvoiceWrap` the updated supplier invoice
     */
    cancelSupplierInvoicesResource: (givenNumber: number, params: RequestParams = {}) =>
      this.request<SupplierInvoiceWrap, any>({
        path: `/3/supplierinvoices/${givenNumber}/cancel`,
        method: "PUT",
        format: "json",
        ...params,
      }),

    /**
     * @description The created credit invoice will be referenced in the property CreditReference.
     *
     * @tags SupplierInvoicesResource
     * @name CreditSupplierInvoicesResource
     * @summary Credit given supplier invoice
     * @request PUT:/3/supplierinvoices/{GivenNumber}/credit
     * @response `200` `SupplierInvoiceWrap` the updated supplier invoice
     */
    creditSupplierInvoicesResource: (givenNumber: number, params: RequestParams = {}) =>
      this.request<SupplierInvoiceWrap, any>({
        path: `/3/supplierinvoices/${givenNumber}/credit`,
        method: "PUT",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SupplierInvoicesResource
     * @name Approvalpayment
     * @summary Approval of payment of given supplier invoice
     * @request PUT:/3/supplierinvoices/{GivenNumber}/approvalpayment
     * @response `200` `SupplierInvoiceWrap` the updated supplier invoice
     */
    approvalpayment: (givenNumber: number, params: RequestParams = {}) =>
      this.request<SupplierInvoiceWrap, any>({
        path: `/3/supplierinvoices/${givenNumber}/approvalpayment`,
        method: "PUT",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SupplierInvoicesResource
     * @name Approvalbookkeep
     * @summary Approval of bookkeep of given supplier invoice
     * @request PUT:/3/supplierinvoices/{GivenNumber}/approvalbookkeep
     * @response `200` `SupplierInvoiceWrap` the updated supplier invoice
     */
    approvalbookkeep: (givenNumber: number, params: RequestParams = {}) =>
      this.request<SupplierInvoiceWrap, any>({
        path: `/3/supplierinvoices/${givenNumber}/approvalbookkeep`,
        method: "PUT",
        format: "json",
        ...params,
      }),
  }
  suppliers = {
    /**
     * @description The supplier register can return a list of records or a single record. By specifying a SupplierNumber in the URL, a single record will be returned. Not specifying a SupplierNumber will return a list of records.
     *
     * @tags SuppliersResource
     * @name ListSuppliersResource
     * @summary Retrieve a list of suppliers
     * @request GET:/3/suppliers
     * @response `200` `SupplierListItemList` list of suppliers
     */
    listSuppliersResource: (params: RequestParams = {}) =>
      this.request<SupplierListItemList, any>({
        path: `/3/suppliers`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SuppliersResource
     * @name CreateSuppliersResource
     * @summary Create a supplier
     * @request POST:/3/suppliers
     * @response `200` `SupplierWrap` the created supplier
     */
    createSuppliersResource: (supplier: SupplierWrap, params: RequestParams = {}) =>
      this.request<SupplierWrap, any>({
        path: `/3/suppliers`,
        method: "POST",
        body: supplier,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SuppliersResource
     * @name GetSuppliersResource
     * @summary Retrieve a single supplier
     * @request GET:/3/suppliers/{SupplierNumber}
     * @response `200` `SupplierWrap` the existing supplier
     */
    getSuppliersResource: (supplierNumber: string, params: RequestParams = {}) =>
      this.request<SupplierWrap, any>({
        path: `/3/suppliers/${supplierNumber}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SuppliersResource
     * @name UpdateSuppliersResource
     * @summary Update a supplier
     * @request PUT:/3/suppliers/{SupplierNumber}
     * @response `200` `SupplierWrap` the updated supplier
     */
    updateSuppliersResource: (supplierNumber: string, supplier: SupplierWrap, params: RequestParams = {}) =>
      this.request<SupplierWrap, any>({
        path: `/3/suppliers/${supplierNumber}`,
        method: "PUT",
        body: supplier,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  }
  taxreductions = {
    /**
     * No description
     *
     * @tags TaxReductionsResource
     * @name ListTaxReductionsResource
     * @summary Retrieve a list of tax reductions
     * @request GET:/3/taxreductions
     * @response `200` `TaxReductionListItemList` a list of tax reductions.
     */
    listTaxReductionsResource: (
      query?: {
        /** possibility to filter tax reductions */
        filter?: "invoices" | "orders" | "offers"
      },
      params: RequestParams = {}
    ) =>
      this.request<TaxReductionListItemList, any>({
        path: `/3/taxreductions`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Note that different types of tax reduction, i.e. ROT, RUT, or Green Technology, applications work differently. When creating an application for Green Technology, the field <em>TaxReductionAmounts</em> becomes mandatory as it is used to determine how much of the asked amount is intended for which type of work. Similarly, the <em>AskedAmount</em> field of the <em>TaxReduction</em> becomes optional, as it will always be considered to be equal to the sum of the <em>TaxReductionAmounts</em>. For the other types, ROT and RUT, this field is not required and should be omitted. Unlike earlier iterations of this endpoint, specifying the type of reduction for the provided <em>TaxReduction</em> (e.g. ROT, RUT, or Green) is not necessary as this value will always be equal to the type set on the provided document instead. This endpoint can raise a variety of validation errors, some of which are only relevant for Green Technology applications. Those errors will always return an HTTP Code of 400 and include, but are not limited to, those shown below: <table> <caption>Errors that can be raised by this endpoint.</caption> <tr> <th>Error Code</th> <th>Types</th> <th>Description</th> <th>Solution</th> </tr> <tr> <td>2000600</td> <td>ROT, RUT, GREEN</td> <td>The provided Social Security Number is already in use for this document.</td> <td>Verify that the Social Security Number is different from any other applicants already added.</td> </tr> <tr> <td>2004217, 2004218</td> <td>ROT, RUT, GREEN</td> <td>The total asked amount of the application is either in an invalid format or is negative.</td> <td>Verify that the <em>AskedAmount</em>-field is a positive number (0 is valid for Green Technology) and that it is an integer.</td> </tr> <tr> <td>2004209</td> <td>GREEN</td> <td>The <em>WorkType</em>-field contains a work type that is not valid for the given type of reduction.</td> <td>Ensure that the <em>WorkType</em> contains a valid type of work for Green Technology.</td> </tr> <tr> <td>2004263</td> <td>GREEN</td> <td>The <em>TaxReductionAmounts</em>-field is missing for a Green Technology application.</td> <td>Ensure that the field is included, that it is an array, and that each contained object denotes a specific type's asked amount.</td> </tr> <tr> <td>2004262</td> <td>GREEN</td> <td>There are more than one object denoting the asked amount for the same type in the <em>TaxReductionAmounts</em>-field.</td> <td>Ensure that there is only one object denoting the asked amount per type contained in the array.</td> </tr> </table>
     *
     * @tags TaxReductionsResource
     * @name CreateTaxReductionsResource
     * @summary Create a Tax Reduction
     * @request POST:/3/taxreductions
     * @response `200` `TaxReductionWrap` the created tax reduction
     */
    createTaxReductionsResource: (taxReduction: TaxReductionWrap, params: RequestParams = {}) =>
      this.request<TaxReductionWrap, any>({
        path: `/3/taxreductions`,
        method: "POST",
        body: taxReduction,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TaxReductionsResource
     * @name GetTaxReductionsResource
     * @summary Retrieve a single tax reduction
     * @request GET:/3/taxreductions/{Id}
     * @response `200` `TaxReductionWrap` the existing tax reduction
     */
    getTaxReductionsResource: (id: number, params: RequestParams = {}) =>
      this.request<TaxReductionWrap, any>({
        path: `/3/taxreductions/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TaxReductionsResource
     * @name UpdateTaxReductionsResource
     * @summary Update a tax reduction
     * @request PUT:/3/taxreductions/{Id}
     * @response `200` `TaxReductionWrap` the updated tax reduction
     */
    updateTaxReductionsResource: (id: number, taxReduction: TaxReductionWrap, params: RequestParams = {}) =>
      this.request<TaxReductionWrap, any>({
        path: `/3/taxreductions/${id}`,
        method: "PUT",
        body: taxReduction,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TaxReductionsResource
     * @name RemoveTaxReductionsResource
     * @summary Remove a tax reduction
     * @request DELETE:/3/taxreductions/{Id}
     * @response `default` `void` empty
     */
    removeTaxReductionsResource: (id: number, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/3/taxreductions/${id}`,
        method: "DELETE",
        ...params,
      }),
  }
  termsofdeliveries = {
    /**
     * @description The terms of deliveries register can return a list of records or a single record. By specifying a Code in the URL, a single record will be returned. Not specifying a Code will return a list of records.
     *
     * @tags TermsOfDeliveriesResource
     * @name ListTermsOfDeliveriesResource
     * @summary Retrieve a list of terms of deliveries
     * @request GET:/3/termsofdeliveries
     * @response `200` `TermsOfDeliveryList` a list of terms of deliveries
     */
    listTermsOfDeliveriesResource: (params: RequestParams = {}) =>
      this.request<TermsOfDeliveryList, any>({
        path: `/3/termsofdeliveries`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TermsOfDeliveriesResource
     * @name CreateTermsOfDeliveriesResource
     * @summary Create a terms of delivery
     * @request POST:/3/termsofdeliveries
     * @response `200` `TermsOfDeliveryWrap` the created term of delivery
     */
    createTermsOfDeliveriesResource: (termOfDelivery: TermsOfDeliveryWrap, params: RequestParams = {}) =>
      this.request<TermsOfDeliveryWrap, any>({
        path: `/3/termsofdeliveries`,
        method: "POST",
        body: termOfDelivery,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TermsOfDeliveriesResource
     * @name GetTermsOfDeliveriesResource
     * @summary Retrieve a single terms of delivery
     * @request GET:/3/termsofdeliveries/{Code}
     * @response `200` `TermsOfDeliveryWrap` the existing terms of delivery
     */
    getTermsOfDeliveriesResource: (code: string, params: RequestParams = {}) =>
      this.request<TermsOfDeliveryWrap, any>({
        path: `/3/termsofdeliveries/${code}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TermsOfDeliveriesResource
     * @name UpdateTermsOfDeliveriesResource
     * @summary Update a terms of delivery
     * @request PUT:/3/termsofdeliveries/{Code}
     * @response `200` `TermsOfDeliveryWrap` the updated terms of delivery
     */
    updateTermsOfDeliveriesResource: (
      code: string,
      termsOfDelivery: TermsOfDeliveryWrap,
      params: RequestParams = {}
    ) =>
      this.request<TermsOfDeliveryWrap, any>({
        path: `/3/termsofdeliveries/${code}`,
        method: "PUT",
        body: termsOfDelivery,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  }
  termsofpayments = {
    /**
     * No description
     *
     * @tags TermsOfPaymentsResource
     * @name ListTermsOfPaymentsResource
     * @summary Retrieve a list of all terms of payments
     * @request GET:/3/termsofpayments
     * @response `200` `TermsOfPaymentList` a list of terms of payments
     */
    listTermsOfPaymentsResource: (params: RequestParams = {}) =>
      this.request<TermsOfPaymentList, any>({
        path: `/3/termsofpayments`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TermsOfPaymentsResource
     * @name CreateTermsOfPaymentsResource
     * @summary Create a term of payment
     * @request POST:/3/termsofpayments
     * @response `200` `TermsOfPaymentWrap` the created terms of payment
     */
    createTermsOfPaymentsResource: (termsOfPayment: TermsOfPaymentWrap, params: RequestParams = {}) =>
      this.request<TermsOfPaymentWrap, any>({
        path: `/3/termsofpayments`,
        method: "POST",
        body: termsOfPayment,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TermsOfPaymentsResource
     * @name GetTermsOfPaymentsResource
     * @summary Retrieve a single terms of payment
     * @request GET:/3/termsofpayments/{Code}
     * @response `200` `TermsOfPaymentWrap` the existing terms of payment
     */
    getTermsOfPaymentsResource: (code: string, params: RequestParams = {}) =>
      this.request<TermsOfPaymentWrap, any>({
        path: `/3/termsofpayments/${code}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TermsOfPaymentsResource
     * @name UpdateTermsOfPaymentsResource
     * @summary Update a term of payment
     * @request PUT:/3/termsofpayments/{Code}
     * @response `200` `TermsOfPaymentWrap` the updated term of payment
     */
    updateTermsOfPaymentsResource: (
      code: string,
      termOfPayment: TermsOfPaymentWrap,
      params: RequestParams = {}
    ) =>
      this.request<TermsOfPaymentWrap, any>({
        path: `/3/termsofpayments/${code}`,
        method: "PUT",
        body: termOfPayment,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TermsOfPaymentsResource
     * @name RemoveTermsOfPaymentsResource
     * @summary Remove a term of payment
     * @request DELETE:/3/termsofpayments/{Code}
     * @response `default` `void` empty
     */
    removeTermsOfPaymentsResource: (code: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/3/termsofpayments/${code}`,
        method: "DELETE",
        ...params,
      }),
  }
  emailsenders = {
    /**
     * No description
     *
     * @tags TrustedEmailSendersResource
     * @name GetTrustedEmailSendersResource
     * @summary Retrieve a list of all trusted and rejected senders
     * @request GET:/3/emailsenders/
     * @response `200` `TrustedEmailSenderWrap` all trusted and rejected email senders
     */
    getTrustedEmailSendersResource: (params: RequestParams = {}) =>
      this.request<TrustedEmailSenderWrap, any>({
        path: `/3/emailsenders/`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TrustedEmailSendersResource
     * @name CreateTrustedEmailSendersResource
     * @summary Add a new email address as trusted
     * @request POST:/3/emailsenders/trusted
     * @response `200` `TrustedEmailSenderTrustedSenderWrap` the created trusted email sender
     */
    createTrustedEmailSendersResource: (
      trustedEmailSender: TrustedEmailSenderTrustedSenderWrap,
      params: RequestParams = {}
    ) =>
      this.request<TrustedEmailSenderTrustedSenderWrap, any>({
        path: `/3/emailsenders/trusted`,
        method: "POST",
        body: trustedEmailSender,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Provide an id matching an email to delete.
     *
     * @tags TrustedEmailSendersResource
     * @name RemoveTrustedEmailSendersResource
     * @summary Delete an email address from the trusted senders list
     * @request DELETE:/3/emailsenders/trusted/{Id}
     * @response `default` `void` empty
     */
    removeTrustedEmailSendersResource: (id: number, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/3/emailsenders/trusted/${id}`,
        method: "DELETE",
        ...params,
      }),
  }
  units = {
    /**
     * @description The units register can return a list of records or a single record. By specifying a Code in the URL, a single record will be returned. Not specifying a Code will return a list of records.
     *
     * @tags UnitsResource
     * @name ListUnitsResource
     * @summary Retrieve a list of units
     * @request GET:/3/units
     * @response `200` `UnitList` a list of units.
     */
    listUnitsResource: (params: RequestParams = {}) =>
      this.request<UnitList, any>({
        path: `/3/units`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UnitsResource
     * @name CreateUnitsResource
     * @summary Create a unit
     * @request POST:/3/units
     * @response `200` `UnitWrap` the created unit
     */
    createUnitsResource: (unit: UnitWrap, params: RequestParams = {}) =>
      this.request<UnitWrap, any>({
        path: `/3/units`,
        method: "POST",
        body: unit,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UnitsResource
     * @name GetUnitsResource
     * @summary Retrieve a single unit
     * @request GET:/3/units/{Code}
     * @response `200` `UnitWrap` the existing unit
     */
    getUnitsResource: (code: string, params: RequestParams = {}) =>
      this.request<UnitWrap, any>({
        path: `/3/units/${code}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UnitsResource
     * @name UpdateUnitsResource
     * @summary Update a unit
     * @request PUT:/3/units/{Code}
     * @response `200` `UnitWrap` the updated unit
     */
    updateUnitsResource: (code: string, unit: UnitWrap, params: RequestParams = {}) =>
      this.request<UnitWrap, any>({
        path: `/3/units/${code}`,
        method: "PUT",
        body: unit,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UnitsResource
     * @name RemoveUnitsResource
     * @summary Remove a unit
     * @request DELETE:/3/units/{Code}
     * @response `default` `void` empty
     */
    removeUnitsResource: (code: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/3/units/${code}`,
        method: "DELETE",
        ...params,
      }),
  }
  vacationdebtbasis = {
    /**
     * No description
     *
     * @tags VacationDebtBasisResource
     * @name GetVacationDebtBasisResource
     * @summary Retrieve a specific vacation debt basis for a posted voucher
     * @request GET:/3/vacationdebtbasis/{Year}/{Month}
     * @response `200` `VacationDebtBasisWrap` a created and posted vacation debt basis up until last day of month in year
     */
    getVacationDebtBasisResource: (year: number, month: number, params: RequestParams = {}) =>
      this.request<VacationDebtBasisWrap, any>({
        path: `/3/vacationdebtbasis/${year}/${month}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  }
  voucherfileconnections = {
    /**
     * @description The voucher file connections register can return a list of records or a single record. By specifying a FileId in the URL, a single record will be returned. Not specifying a FileId will return a list of records.
     *
     * @tags VoucherFileConnectionsResource
     * @name ListVoucherFileConnectionsResource
     * @summary Retrieve a list of voucher file connections
     * @request GET:/3/voucherfileconnections/
     * @response `200` `VoucherFileConnectionList` a list of voucher file connections.
     */
    listVoucherFileConnectionsResource: (params: RequestParams = {}) =>
      this.request<VoucherFileConnectionList, any>({
        path: `/3/voucherfileconnections/`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags VoucherFileConnectionsResource
     * @name CreateVoucherFileConnectionsResource
     * @summary Create a voucher file connection
     * @request POST:/3/voucherfileconnections/
     * @response `200` `VoucherFileConnectionWrap` the created voucher file connection
     */
    createVoucherFileConnectionsResource: (
      voucherFileConnection: VoucherFileConnectionWrap,
      params: RequestParams = {}
    ) =>
      this.request<VoucherFileConnectionWrap, any>({
        path: `/3/voucherfileconnections/`,
        method: "POST",
        body: voucherFileConnection,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags VoucherFileConnectionsResource
     * @name GetVoucherFileConnectionsResource
     * @summary Retrieve a single voucher file connection
     * @request GET:/3/voucherfileconnections/{FileId}
     * @response `200` `VoucherFileConnectionWrap` the existing voucher file connection
     */
    getVoucherFileConnectionsResource: (fileId: string, params: RequestParams = {}) =>
      this.request<VoucherFileConnectionWrap, any>({
        path: `/3/voucherfileconnections/${fileId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags VoucherFileConnectionsResource
     * @name RemoveVoucherFileConnectionsResource
     * @summary Remove a voucher file connection
     * @request DELETE:/3/voucherfileconnections/{FileId}
     * @response `default` `void` empty
     */
    removeVoucherFileConnectionsResource: (fileId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/3/voucherfileconnections/${fileId}`,
        method: "DELETE",
        ...params,
      }),
  }
  vouchers = {
    /**
     * No description
     *
     * @tags VouchersResource
     * @name GetVouchersResource
     * @summary Retrieve a specific voucher
     * @request GET:/3/vouchers/{VoucherSeries}/{VoucherNumber}
     * @response `200` `VoucherWrap` a single voucher
     */
    getVouchersResource: (
      voucherSeries: string,
      voucherNumber: number,
      query?: {
        /**
         * filter on financial year
         * @format int32
         */
        financialyear?: number
      },
      params: RequestParams = {}
    ) =>
      this.request<VoucherWrap, any>({
        path: `/3/vouchers/${voucherSeries}/${voucherNumber}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Note that vouchers have two keys, one for voucher series and one for voucher number. The financial year is also specified for each voucher, this is due to the same voucher series and number is used each year. To get a unique voucher you need the voucher series, the voucher number and the financial year. These properties will always be returned where ever vouchers is used.
     *
     * @tags VouchersResource
     * @name ListVouchersResource
     * @summary Retrieve all vouchers
     * @request GET:/3/vouchers/
     * @response `200` `VoucherListItemList` list of vouchers
     */
    listVouchersResource: (
      query?: {
        /**
         * filter on financial year
         * @format int32
         */
        financialyear?: number
      },
      params: RequestParams = {}
    ) =>
      this.request<VoucherListItemList, any>({
        path: `/3/vouchers/`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description The created voucher will be returned if everything succeeded, if there was any problems an error will be returned. If no query param is used the voucher will be created in the preselected financial year. Go to the financialyears endpoint to read on how to retreive the Financial year id.
     *
     * @tags VouchersResource
     * @name CreateVouchersResource
     * @summary Create a voucher
     * @request POST:/3/vouchers/
     * @response `200` `VoucherWrap` the created voucher
     */
    createVouchersResource: (
      voucher: VoucherWrap,
      query?: {
        /**
         * Financial year id, used to determine which financial year the voucher is created in
         * @format int32
         */
        financialyear?: number
      },
      params: RequestParams = {}
    ) =>
      this.request<VoucherWrap, any>({
        path: `/3/vouchers/`,
        method: "POST",
        query: query,
        body: voucher,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags VouchersResource
     * @name ListSeries
     * @summary Retrieve a list of vouchers for a specific series
     * @request GET:/3/vouchers/sublist/{VoucherSeries}
     * @response `200` `VoucherListItemList` list of vouchers
     */
    listSeries: (
      voucherSeries: string,
      query?: {
        /**
         * filter on financial year
         * @format int32
         */
        financialyear?: number
      },
      params: RequestParams = {}
    ) =>
      this.request<VoucherListItemList, any>({
        path: `/3/vouchers/sublist/${voucherSeries}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  }
  voucherseries = {
    /**
     * @description The voucher series register can return a list of records or a single record. By specifying a Code in the URL, a single record will be returned. Not specifying a Code will return a list of records.
     *
     * @tags VoucherSeriesResource
     * @name ListVoucherSeriesResource
     * @summary Retrieve a list of voucher series
     * @request GET:/3/voucherseries
     * @response `200` `VoucherSeriesListItemList` a list of voucher series.
     */
    listVoucherSeriesResource: (params: RequestParams = {}) =>
      this.request<VoucherSeriesListItemList, any>({
        path: `/3/voucherseries`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags VoucherSeriesResource
     * @name CreateVoucherSeriesResource
     * @summary Create a voucher series
     * @request POST:/3/voucherseries
     * @response `200` `VoucherSeriesWrap` the created voucher series
     */
    createVoucherSeriesResource: (voucherSeries: VoucherSeriesWrap, params: RequestParams = {}) =>
      this.request<VoucherSeriesWrap, any>({
        path: `/3/voucherseries`,
        method: "POST",
        body: voucherSeries,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags VoucherSeriesResource
     * @name GetVoucherSeriesResource
     * @summary Retrieve a single voucher series
     * @request GET:/3/voucherseries/{Code}
     * @response `200` `VoucherSeriesWrap` the existing voucher series
     */
    getVoucherSeriesResource: (code: string, params: RequestParams = {}) =>
      this.request<VoucherSeriesWrap, any>({
        path: `/3/voucherseries/${code}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags VoucherSeriesResource
     * @name UpdateVoucherSeriesResource
     * @summary Update a voucher series
     * @request PUT:/3/voucherseries/{Code}
     * @response `200` `VoucherSeriesWrap` the updated voucher series
     */
    updateVoucherSeriesResource: (
      code: string,
      voucherSeries: VoucherSeriesWrap,
      params: RequestParams = {}
    ) =>
      this.request<VoucherSeriesWrap, any>({
        path: `/3/voucherseries/${code}`,
        method: "PUT",
        body: voucherSeries,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  }
  wayofdeliveries = {
    /**
     * @description The way of delivery register can return a list of records or a single record. By specifying a Code in the URL, a single record will be returned. Not specifying a Code will return a list of records.
     *
     * @tags WayOfDeliveriesResource
     * @name ListWayOfDeliveriesResource
     * @summary Retrieve a list of way of deliveries
     * @request GET:/3/wayofdeliveries
     * @response `200` `WayOfDeliveryList` a list of way of deliveries
     */
    listWayOfDeliveriesResource: (params: RequestParams = {}) =>
      this.request<WayOfDeliveryList, any>({
        path: `/3/wayofdeliveries`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags WayOfDeliveriesResource
     * @name CreateWayOfDeliveriesResource
     * @summary Create a way of delivery
     * @request POST:/3/wayofdeliveries
     * @response `200` `WayOfDeliveryWrap` the created way of delivery
     */
    createWayOfDeliveriesResource: (wayOfDelivery: WayOfDeliveryWrap, params: RequestParams = {}) =>
      this.request<WayOfDeliveryWrap, any>({
        path: `/3/wayofdeliveries`,
        method: "POST",
        body: wayOfDelivery,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags WayOfDeliveriesResource
     * @name GetWayOfDeliveriesResource
     * @summary Retrieve a single way of delivery
     * @request GET:/3/wayofdeliveries/{Code}
     * @response `200` `WayOfDeliveryWrap` the existing way of delivery
     */
    getWayOfDeliveriesResource: (code: string, params: RequestParams = {}) =>
      this.request<WayOfDeliveryWrap, any>({
        path: `/3/wayofdeliveries/${code}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags WayOfDeliveriesResource
     * @name UpdateWayOfDeliveriesResource
     * @summary Update a way of delivery
     * @request PUT:/3/wayofdeliveries/{Code}
     * @response `200` `WayOfDeliveryWrap` the updated way of delivery
     */
    updateWayOfDeliveriesResource: (
      code: string,
      wayOfDelivery: WayOfDeliveryWrap,
      params: RequestParams = {}
    ) =>
      this.request<WayOfDeliveryWrap, any>({
        path: `/3/wayofdeliveries/${code}`,
        method: "PUT",
        body: wayOfDelivery,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags WayOfDeliveriesResource
     * @name RemoveWayOfDeliveriesResource
     * @summary Remove a way of delivery
     * @request DELETE:/3/wayofdeliveries/{Code}
     * @response `default` `void` empty
     */
    removeWayOfDeliveriesResource: (code: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/3/wayofdeliveries/${code}`,
        method: "DELETE",
        ...params,
      }),
  }
  fileattachments = {
    /**
     * No description
     *
     * @tags AttachmentResource
     * @name GetAttachments
     * @summary Get attached files on an entity
     * @request GET:/api/fileattachments/attachments-v1
     * @response `200` `(Attachment)[]` A list of attachments
     */
    getAttachments: (
      query: {
        /** ids of the entities whose attachments should be fetched */
        entityid: number[]
        /** type of the entities whose attachments should be fetched */
        entitytype: "OF" | "O" | "F" | "C" | "LGR_IO" | "LGR_IG"
      },
      params: RequestParams = {}
    ) =>
      this.request<Attachment[], any>({
        path: `/api/fileattachments/attachments-v1`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AttachmentResource
     * @name Attach
     * @summary Attach files to one or more entities
     * @request POST:/api/fileattachments/attachments-v1
     * @response `200` `(Attachment)[]` A list of attachments
     */
    attach: (attachments: Attachment[], params: RequestParams = {}) =>
      this.request<Attachment[], any>({
        path: `/api/fileattachments/attachments-v1`,
        method: "POST",
        body: attachments,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AttachmentResource
     * @name GetNumberOfAttachmentsForEntity
     * @summary List number of attachments
     * @request GET:/api/fileattachments/attachments-v1/numberofattachments
     * @response `200` `(NumberOfAttachments)[]` A list of the number of attachments on each entity
     */
    getNumberOfAttachmentsForEntity: (
      query: {
        /** ids of the entities to look for number of attachments on */
        entityids: number[]
        /** type of the entities  to look for number of attachments on */
        entitytype: "OF" | "O" | "F" | "C" | "LGR_IO" | "LGR_IG"
      },
      params: RequestParams = {}
    ) =>
      this.request<NumberOfAttachments[], any>({
        path: `/api/fileattachments/attachments-v1/numberofattachments`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AttachmentResource
     * @name ValidateIncludedOnSend
     * @summary Validates a list of attachments that will be included on send
     * @request POST:/api/fileattachments/attachments-v1/validateincludedonsend
     * @response `default` `void` nothing
     */
    validateIncludedOnSend: (attachments: Attachment[], params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/api/fileattachments/attachments-v1/validateincludedonsend`,
        method: "POST",
        body: attachments,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AttachmentResource
     * @name UpdateAttachment
     * @summary Update attachment
     * @request PUT:/api/fileattachments/attachments-v1/{attachmentId}
     * @response `200` `Attachment` The updated attachment
     */
    updateAttachment: (attachmentId: string, attachment: Attachment, params: RequestParams = {}) =>
      this.request<Attachment, any>({
        path: `/api/fileattachments/attachments-v1/${attachmentId}`,
        method: "PUT",
        body: attachment,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AttachmentResource
     * @name Detach
     * @summary Detach file
     * @request DELETE:/api/fileattachments/attachments-v1/{attachmentId}
     * @response `default` `void` void
     */
    detach: (attachmentId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/api/fileattachments/attachments-v1/${attachmentId}`,
        method: "DELETE",
        ...params,
      }),
  }
}
